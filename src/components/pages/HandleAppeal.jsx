import { Button } from "@material-ui/core";
import React, { useState, useMemo } from "react";
import { Util, XmlEditor } from "react-xml-editor";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  exportDecisionAppealToPDF,
  exportDecisionAppealToXHTML,
} from "../../app/citizen/citizen.actions";

const docSpec = {
  elements: {
    item: {
      attributes: {
        label: {
          asker: Util.askString,
          menu: [
            {
              action: Util.deleteAttribute,
              caption: "Delete attribute",
            },
          ],
        },
        type: {
          asker: Util.askPicklist([
            {
              value: "short",
              caption: "short",
            },
            {
              value: "medium",
              caption: "medium",
            },
            "long",
          ]),
        },
      },
      menu: [
        {
          action: Util.newElementChild("<child />"),
          caption: "Append child <child />",
        },
        {
          action: Util.newAttribute({
            name: "label",
            value: "default value",
          }),
          caption: "Add attribute @label",
          hideIf: (xml, id) => {
            const element = Util.getXmlNode(xml, id);
            return (
              element && element.$ && typeof element.$.label !== "undefined"
            );
          },
        },
        {
          action: Util.deleteElement,
          caption: "Delete this <item />",
        },
        {
          action: Util.newElementBefore("<item />"),
          caption: "New <item /> before this",
        },
        {
          action: Util.newElementAfter("<item />"),
          caption: "New <item /> after this",
        },
        {
          action: Util.duplicateElement,
          caption: "Copy <item />",
        },
        {
          action: Util.moveElementUp,
          caption: "Move <item /> up",
          hideIf: (xml, id) => !Util.canMoveElementUp(xml, id),
        },
        {
          action: Util.moveElementDown,
          caption: "Move <item /> down",
          hideIf: (xml, id) => !Util.canMoveElementDown(xml, id),
        },
      ],
    },
  },
};

export const HandleAppeal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState(
    localStorage.getItem("currentAppeal").toString()
  );
  const ref = useMemo(() => React.createRef(), []);

  const parser = useMemo(() => new DOMParser(), []);
  const stateObject = useMemo(() => parser.parseFromString(state, "text/xml"), [
    parser,
    state,
  ]);

  const handleExportToXHTML = () => {
    dispatch(exportDecisionAppealToXHTML(state));
    history.push("/xhtml-export");
  };

  const handleExportToPDF = () => {
    dispatch(exportDecisionAppealToPDF(state));
    history.push("/pdf-export");
  };

  const respondToAppeal = () => {
    localStorage.setItem(
      "appealId",
      JSON.stringify(
        stateObject
          .getElementsByTagName("zah:dokument_zahtev")[0]
          .getAttribute("id")
      )
    );
    history.push("respondToAppeal");
  };

  return (
    <>
      <XmlEditor docSpec={docSpec} ref={ref} xml={state} mode='laic' />
      <Button onClick={handleExportToXHTML}>Export to XHTML</Button>
      <Button onClick={handleExportToPDF}>Export PDF</Button>
      <Button onClick={respondToAppeal}>Respond to appeal</Button>
    </>
  );
};
