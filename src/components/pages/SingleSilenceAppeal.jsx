import { Button } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  exportSilenceAppealToPDF,
  exportSilenceAppealToXHTML,
  withdrawSilenceAppeal,
} from "../../app/citizen/citizen.actions";
import {
  selectCurrentSilenceAppealPDF,
  selectCurrentSilenceAppealXHTML,
} from "../../app/citizen/citizen.selectors";
import { selectLoggedUser } from "../../app/auth/auth.selectors";
import { notifyOfficialSilence } from "../../app/commissioner/commissioner.action";

export const SingleSilenceAppeal = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(
    localStorage.getItem("currentSilenceAppeal")
  );
  const ref = useMemo(() => React.createRef(), []);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(state, "text/xml");

  const id = xmlDoc
    .getElementsByTagName("zpc:zalba_protiv_cutanja")[0]
    .getAttribute("id");

  const status = xmlDoc
    .getElementsByTagName("zpc:zalba_protiv_cutanja")[0]
    .getAttribute("status");

  const pdfBytes = useSelector(selectCurrentSilenceAppealPDF);
  const xhtmlBytes = useSelector(selectCurrentSilenceAppealXHTML);

  useEffect(() => {
    if (pdfBytes) {
      const fileUrl = URL.createObjectURL(pdfBytes);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "ZalbaProtivCutanja.pdf";
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
      a.download = "ZalbaProtivCutanja.html";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [xhtmlBytes]);

  const handleExportToXHTML = () => {
    dispatch(exportSilenceAppealToXHTML(id));
  };

  const handleExportToPDF = () => {
    dispatch(exportSilenceAppealToPDF(id));
  };

  const respondToAppeal = () => {
    localStorage.setItem("appealId", id);
    localStorage.setItem("appealType", true);
    history.push("respondToAppeal");
  };

  const notifyOffical = () => {
    dispatch(notifyOfficialSilence(id));
  };

  const handleWithdrawAppeal = () => {
    dispatch(withdrawSilenceAppeal(id));
  };

  return (
    <>
      <XmlEditor docSpec={{}} ref={ref} xml={state} mode='laic' />
      <Button onClick={handleExportToXHTML}>Export to XHTML</Button>
      <Button onClick={handleExportToPDF}>Export to PDF</Button>
      <Button>Export to RDF</Button>
      <Button>Export to JSON</Button>
      {loggedUser.role === "ROLE_POVERENIK" ? (
        <>
          {status === "ACTIVE" ? null : (
            <>
              <Button onClick={notifyOffical}>Notify Official</Button>
              <Button onClick={respondToAppeal}>Respond to appeal</Button>
            </>
          )}
        </>
      ) : status === "ACTIVE" ? (
        <Button onClick={handleWithdrawAppeal}>Withdraw appeal</Button>
      ) : null}
    </>
  );
};
