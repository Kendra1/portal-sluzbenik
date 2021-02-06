import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMySilenceAppeals } from "../../app/citizen/citizen.actions";
import { selectSilenceAppeals } from "../../app/citizen/citizen.selectors";

export const SilenceAppeals = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySilenceAppeals());
  }, [dispatch]);

  const appealsState = useSelector(selectSilenceAppeals);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(appealsState, "text/xml");
  const requests = xmlDoc.getElementsByTagName("zpc:zalba_protiv_cutanja");

  const handleSingleRequest = useCallback(
    (request) => {
      localStorage.setItem("currentSilenceAppeal", request);
      history.push("singleSilenceAppeal");
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
            Go to appeal
          </Button>
        </div>
      ))}
    </div>
  );
};
