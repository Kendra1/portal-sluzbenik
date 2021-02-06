import { combineReducers } from "redux";
import {
  STORE_DECISION_APPEALS,
  STORE_MY_RESPONSES,
  STORE_PDF,
  CLEAR_PDF,
  STORE_XHTML,
  CLEAR_XHTML,
  STORE_DECISION_PATTERN,
  STORE_SILENCE_APPEALS,
  STORE_CREATION,
} from "./commissioner.constants";

const initialState = {
  decisionAppeals: [],
  silenceAppeals: [],
  responses: [],
  pattern: null,
  currentPDF: null,
  currentXHTML: null,
  creation: null,
};

const decisionAppealsReducer = (
  state = initialState.decisionAppeals,
  action
) => {
  if (action.type === STORE_DECISION_APPEALS) {
    return action.payload;
  }
  return state;
};

const silenceAppealsReducer = (state = initialState.silenceAppeals, action) => {
  if (action.type === STORE_SILENCE_APPEALS) {
    return action.payload;
  }
  return state;
};

const responsesReducer = (state = initialState.responses, action) => {
  if (action.type === STORE_MY_RESPONSES) {
    return action.payload;
  }
  return state;
};

const patternReducer = (state = initialState.pattern, action) => {
  if (action.type === STORE_DECISION_PATTERN) {
    return action.payload;
  }
  return state;
};

const currentPDFReducer = (state = initialState.currentPDF, action) => {
  if (action.type === STORE_PDF) {
    return action.payload;
  } else if (action.type === CLEAR_PDF) {
    return state;
  }
  return state;
};

const currentXTHMLReducer = (state = initialState.currentXHTML, action) => {
  if (action.type === STORE_XHTML) {
    return action.payload;
  } else if (action.type === CLEAR_XHTML) {
    return state;
  }
  return state;
};

const creationReducer = (state = initialState.creation, action) => {
  if (action.type === STORE_CREATION) {
    return action.payload;
  }
  return state;
};

export const commissionerReducer = combineReducers({
  decisionAppeals: decisionAppealsReducer,
  silenceAppeals: silenceAppealsReducer,
  responses: responsesReducer,
  pattern: patternReducer,
  currentPDF: currentPDFReducer,
  currentXHTML: currentXTHMLReducer,
  creation: creationReducer,
});
