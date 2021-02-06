import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { reqs as data } from "../../assets/xml/requests.json";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAppeals } from "../../app/commissioner/commissioner.action";
import { selectAppeals } from "../../app/commissioner/commissioner.selector";

export const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppeals());
  }, [dispatch]);

  const appealsState = useSelector(selectAppeals);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(appealsState, "text/xml");
  const requests = xmlDoc.getElementsByTagName("zah:dokument_zahtev");

  const handleSingleAppeal = useCallback(
    (requestId) => {
      localStorage.setItem("currentRequestId", requestId);
      history.push("handleAppeal");
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
            onClick={() => handleSingleAppeal(req.id)}
          >
            Handle appeal
          </Button>
        </div>
      ))}
    </div>
  );
};
