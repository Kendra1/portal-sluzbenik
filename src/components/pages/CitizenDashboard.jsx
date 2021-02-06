import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { reqs as data } from "../../assets/xml/requests.json";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMyDecisions } from "../../app/citizen/citizen.actions";
import { selectDecisions } from "../../app/citizen/citizen.selectors";

export const CitizenDashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyDecisions());
  }, [dispatch]);

  const decisionsState = useSelector(selectDecisions);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(decisionsState, "text/xml");
  const requests = xmlDoc.getElementsByTagName("res:resenje");

  const handleSingleRequest = useCallback(
    (request) => {
      localStorage.setItem("currentDecision", request);
      history.push("singleDecision");
    },
    [history]
  );

  const mapXmlToString = useCallback((xmls) => {
    const array = [];
    for (let i = 0; i < xmls.length; i++) {
      const id = xmls[i].getAttribute("id");
      const element = {
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
            onClick={() => handleSingleRequest(req.document)}
          >
            Go to decision
          </Button>
        </div>
      ))}
    </div>
  );
};
