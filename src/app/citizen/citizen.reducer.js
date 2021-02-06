import { combineReducers } from "redux";
import {
  STORE_SILENCE_APPEAL_XHTML,
  STORE_MY_DECISIONS,
  STORE_MY_SILENCE_APPEALS,
  STORE_SILENCE_APPEAL_PDF,
  STORE_MY_DECISION_APPEALS,
  STORE_DECISION_APPEAL_PATTERN,
  STORE_SILENCE_APPEAL_PATTERN,
  STORE_DECISION_APPEAL_PDF,
  STORE_DECISION_APPEAL_XHTML,
} from "./citizen.constants";

const initialState = {
  decisionAppeals: [],
  silenceAppeals: [],
  decisions: [],
  decisionAppealPattern: null,
  silenceAppealPattern: null,
  currentDecisionAppealPDF: null,
  currentDecisionAppealXHTML: null,
  currentSilenceAppealPDF: null,
  currentSilenceAppealXHTML: null,
};

const decisionAppealsReducer = (
  state = initialState.decisionAppeals,
  action
) => {
  if (action.type === STORE_MY_DECISION_APPEALS) {
    return action.payload;
  }
  return state;
};

const silenceAppealsReducer = (state = initialState.silenceAppeals, action) => {
  if (action.type === STORE_MY_SILENCE_APPEALS) {
    return action.payload;
  }
  return state;
};

const decisionsReducer = (state = initialState.decisions, action) => {
  if (action.type === STORE_MY_DECISIONS) {
    return action.payload;
  }
  return state;
};

const decisionPatternReducer = (
  state = initialState.decisionAppealPattern,
  action
) => {
  if (action.type === STORE_DECISION_APPEAL_PATTERN) {
    return action.payload;
  }
  return state;
};

const silencePatternReducer = (
  state = initialState.silenceAppealPattern,
  action
) => {
  if (action.type === STORE_SILENCE_APPEAL_PATTERN) {
    return action.payload;
  }
  return state;
};

const currentDecisionAppealPDFReducer = (
  state = initialState.currentDecisionAppealPDF,
  action
) => {
  if (action.type === STORE_DECISION_APPEAL_PDF) {
    return action.payload;
  }
  return state;
};

const currentDecisionAppealXTHMLReducer = (
  state = initialState.currentDecisionAppealXHTML,
  action
) => {
  if (action.type === STORE_DECISION_APPEAL_XHTML) {
    return action.payload;
  }
  return state;
};

const currentSilenceAppealPDFReducer = (
  state = initialState.currentSilenceAppealPDF,
  action
) => {
  if (action.type === STORE_SILENCE_APPEAL_PDF) {
    return action.payload;
  }
  return state;
};

const currentSilenceAppealXTHMLReducer = (
  state = initialState.currentSilenceAppealXHTML,
  action
) => {
  if (action.type === STORE_SILENCE_APPEAL_XHTML) {
    return action.payload;
  }
  return state;
};

export const citizenReducer = combineReducers({
  decisionAppeals: decisionAppealsReducer,
  silenceAppeals: silenceAppealsReducer,
  decisions: decisionsReducer,
  decisionAppealPattern: decisionPatternReducer,
  silenceAppealPattern: silencePatternReducer,
  currentDecisionAppealPDF: currentDecisionAppealPDFReducer,
  currentDecisionAppealXHTML: currentDecisionAppealXTHMLReducer,
  currentSilenceAppealPDF: currentSilenceAppealPDFReducer,
  currentSilenceAppealXHTML: currentSilenceAppealXTHMLReducer,
});
