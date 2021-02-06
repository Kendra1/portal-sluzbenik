import {
  GET_DECISION_APPEALS,
  GET_MY_RESPONSES,
  NOTIFY_OFFICIAL_DECISION,
  RESPOND_TO_APPEAL,
  STORE_DECISION_APPEALS,
  STORE_MY_RESPONSES,
  GET_SILENCE_APPEALS,
} from "./commissioner.constants";
import * as constants from "./commissioner.constants";

export const getDecisionAppeals = () => ({
  type: GET_DECISION_APPEALS,
});

export const storeDecisionAppeals = (payload) => ({
  type: STORE_DECISION_APPEALS,
  payload,
});

export const getSilenceAppeals = () => ({
  type: GET_SILENCE_APPEALS,
});

export const storeSilenceAppeals = (payload) => ({
  type: constants.STORE_SILENCE_APPEALS,
  payload,
});

export const respondToAppeal = (payload) => ({
  type: RESPOND_TO_APPEAL,
  payload,
});

export const getMyResponses = () => ({
  type: GET_MY_RESPONSES,
});

export const storeMyResponses = (payload) => ({
  type: STORE_MY_RESPONSES,
  payload,
});

export const notifyOfficialDecision = (payload) => ({
  type: NOTIFY_OFFICIAL_DECISION,
  payload,
});

export const notifyOfficialSilence = (payload) => ({
  type: constants.NOTIFY_OFFICIAL_SILENCE,
  payload,
});

export const exportToXHTML = (payload) => ({
  type: constants.EXPORT_TO_XHTML,
  payload,
});

export const exportToPDF = (payload) => ({
  type: constants.EXPORT_TO_PDF,
  payload,
});

export const storeXHTML = (payload) => ({
  type: constants.STORE_XHTML,
  payload,
});

export const clearXHTML = () => ({
  type: constants.CLEAR_XHTML,
});

export const storePDF = (payload) => ({
  type: constants.STORE_PDF,
  payload,
});

export const clearPDF = () => ({
  type: constants.CLEAR_PDF,
});

export const getDecisionPattern = () => ({
  type: constants.GET_DECISION_PATTERN,
});

export const storeDecisionPattern = (payload) => ({
  type: constants.STORE_DECISION_PATTERN,
  payload,
});

export const storeCreation = (payload) => ({
  type: constants.STORE_CREATION,
  payload,
});

export const sendResponse = (payload) => ({
  type: constants.SEND_RESPONSE,
  payload,
});
