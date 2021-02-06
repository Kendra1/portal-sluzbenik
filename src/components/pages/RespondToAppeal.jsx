import React, { useState, useMemo, useEffect } from "react";
import { Builder, XmlEditor } from "react-xml-editor";
import { responsePattern } from "../../assets/xml/patterns.json";
import { useDispatch, useSelector } from "react-redux";
import { docSpec } from "../../assets/data/docsSpec";
import {
  getDecisionPattern,
  respondToAppeal,
  sendResponse,
} from "../../app/commissioner/commissioner.action";
import { Button } from "@material-ui/core";
import {
  selectCreation,
  selectDecisionPattern,
} from "../../app/commissioner/commissioner.selector";

export const RespondToAppeal = () => {
  const [state, setState] = useState();

  const dispatch = useDispatch();

  // const [state, setState] = useState(responsePattern);
  const [ref, setRef] = useState(React.createRef());

  useEffect(() => {
    dispatch(getDecisionPattern());
  }, [dispatch]);

  const pattern = useSelector(selectDecisionPattern);

  var parser = useMemo(() => new DOMParser(), []);
  var xmlDoc = useMemo(() => parser.parseFromString(pattern, "text/xml"), [
    parser,
    pattern,
  ]);

  const serializer = useMemo(() => new XMLSerializer(), []);

  const patternDoc = useMemo(
    () => xmlDoc.getElementsByTagName("res:resenje")[0],
    [xmlDoc]
  );

  const appealId = useMemo(
    () => JSON.stringify(localStorage.getItem("appealId")),
    []
  );
  console.log("doc:", patternDoc);
  console.log("appeadlid", appealId);
  useEffect(() => {
    if (patternDoc && !state) {
      console.log("IFF");
      patternDoc.setAttribute(
        "zalbaId",
        appealId.slice(1, appealId.length - 1)
      );
      setState(serializer.serializeToString(patternDoc));
    }
  }, [appealId, patternDoc, serializer, state]);

  const onClickHarvest = () => {
    if (ref.current) {
      const builder = new Builder({});
      const newState = ref.current.getXml();
      if (newState) {
        const newestState = builder.buildObject(newState);
        dispatch(respondToAppeal(newestState));
      }
    }
  };

  const creation = useSelector(selectCreation);

  const handleSendRequest = () => {
    const type = localStorage.getItem("appealType");
    dispatch(sendResponse(type));
  };

  return state ? (
    <>
      <XmlEditor docSpec={docSpec} ref={ref} xml={state} mode='laic' />
      <Button onClick={onClickHarvest}>Create response</Button>
      {creation ? (
        <Button onClick={handleSendRequest}>Send response </Button>
      ) : null}
    </>
  ) : null;
};
