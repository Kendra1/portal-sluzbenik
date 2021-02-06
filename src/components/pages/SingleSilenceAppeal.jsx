import { Button } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  exportSilenceAppealToPDF,
  exportSilenceAppealToXHTML,
} from "../../app/citizen/citizen.actions";
import {
  selectCurrentSilenceAppealPDF,
  selectCurrentSilenceAppealXHTML,
} from "../../app/citizen/citizen.selectors";
import { selectLoggedUser } from "../../app/auth/auth.selectors";

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
    localStorage.setItem("appealId", JSON.stringify(id));
    history.push("respondToAppeal");
  };

  return (
    <>
      <XmlEditor docSpec={{}} ref={ref} xml={state} mode='laic' />
      <Button onClick={handleExportToXHTML}>Export to XHTML</Button>
      <Button onClick={handleExportToPDF}>Export to PDF</Button>
      {loggedUser.role === "ROLE_POVERENIK" ? (
        <Button onClick={respondToAppeal}>Respond to appeal</Button>
      ) : null}
    </>
  );
};
