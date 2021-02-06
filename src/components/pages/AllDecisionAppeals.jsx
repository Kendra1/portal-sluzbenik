import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getDecisionAppeals } from "../../app/commissioner/commissioner.action";
import { selectDecisionAppeals } from "../../app/commissioner/commissioner.selector";

export const AllDecisionAppeals = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDecisionAppeals());
  }, [dispatch]);

  const appealsState = useSelector(selectDecisionAppeals);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(appealsState, "text/xml");
  const requests = xmlDoc.getElementsByTagName("zpo:zalba_protiv_odluke");

  const handleSingleDecision = useCallback(
    (request) => {
      localStorage.setItem("currentDecisionAppeal", request);
      history.push("singleDecisionAppeal");
    },
    [history]
  );

  const mapXmlToString = useCallback((xmls) => {
    const array = [];
    for (let i = 0; i < xmls.length; i++) {
      const id = xmls[i].getAttribute("id");
      const status = xmls[i].getAttribute("status");
      const element = {
        status: status,
        id: id,
        document: new XMLSerializer().serializeToString(xmls[i]),
      };
      array.push(element);
    }
    return array;
  }, []);

  return (
    <div>
      {mapXmlToString(requests).map((req) => (
        <div
          style={{
            padding: "20px",
            border: "1px solid grey",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <span>{req.id}</span>
          <Button
            style={{
              display: "inline-block",
              width: "50%",
            }}
            onClick={() => handleSingleDecision(req.document)}
          >
            Go to Appeal
          </Button>
        </div>
      ))}
    </div>
  );
};
