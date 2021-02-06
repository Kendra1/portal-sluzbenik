import { combineReducers } from "redux";
import {
  STORE_APPEALS,
  STORE_MY_RESPONSES,
  STORE_PDF,
  CLEAR_PDF,
  STORE_XHTML,
  CLEAR_XHTML,
  STORE_DECISION_PATTERN,
} from "./commissioner.constants";

const initialState = {
  appeals: [],
  responses: [],
  pattern: null,
  currentPDF: null,
  currentXHTML: null,
  creation: null,
};

const appealsReducer = (state = initialState.appeals, action) => {
  if (action.type === STORE_APPEALS) {
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

export const commissionerReducer = combineReducers({
  appeals: appealsReducer,
  responses: responsesReducer,
  pattern: patternReducer,
  currentPDF: currentPDFReducer,
  currentXHTML: currentXTHMLReducer,
});
