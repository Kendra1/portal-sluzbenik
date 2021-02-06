import { Button } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  exportDecisionAppealToXHTML,
  exportDecisionAppealToPDF,
  withdrawAppeal,
} from "../../app/citizen/citizen.actions";
import {
  selectCurrentDecisionAppealPDF,
  selectCurrentDecisionAppealXHTML,
} from "../../app/citizen/citizen.selectors";
import { selectLoggedUser } from "../../app/auth/auth.selectors";
import { notifyOfficialDecision } from "../../app/commissioner/commissioner.action";

export const SingleDecisionAppeal = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(
    localStorage.getItem("currentDecisionAppeal")
  );
  const ref = useMemo(() => React.createRef(), []);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(state, "text/xml");
  const id = xmlDoc
    .getElementsByTagName("zpo:zalba_protiv_odluke")[0]
    .getAttribute("id");

  const pdfBytes = useSelector(selectCurrentDecisionAppealPDF);
  const xhtmlBytes = useSelector(selectCurrentDecisionAppealXHTML);

  useEffect(() => {
    if (pdfBytes) {
      const fileUrl = URL.createObjectURL(pdfBytes);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "ZalbaProtivOdluke.pdf";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [pdfBytes]);

  useEffect(() => {
    if (xhtmlBytes) {
      const file = new Blob([xhtmlBytes], { type: "application/html" });
      const fileUrl = URL.createObjectURL(file);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "ZalbaProtivOdluke.html";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [xhtmlBytes]);

  const handleExportToXHTML = () => {
    dispatch(exportDecisionAppealToXHTML(id));
  };

  const handleExportToPDF = () => {
    dispatch(exportDecisionAppealToPDF(id));
  };

  const respondToAppeal = () => {
    localStorage.setItem("appealId", id);
    localStorage.setItem("appealType", false);
    history.push("respondToAppeal");
  };

  const notifyOffical = () => {
    dispatch(notifyOfficialDecision());
  };

  const handleWithdrawAppeal = () => {
    dispatch(withdrawAppeal(id));
  };

  return (
    <>
      <XmlEditor docSpec={{}} ref={ref} xml={state} mode='laic' />
      <Button onClick={handleExportToXHTML}>Export to XHTML</Button>
      <Button onClick={handleExportToPDF}>Export to PDF</Button>
      {loggedUser.role === "ROLE_POVERENIK" ? (
        <>
          <Button onClick={notifyOffical}>Notify Official</Button>
          <Button onClick={respondToAppeal}>Respond to appeal</Button>
        </>
      ) : (
        <Button onClick={handleWithdrawAppeal}>Withdraw appeal</Button>
      )}
    </>
  );
};
