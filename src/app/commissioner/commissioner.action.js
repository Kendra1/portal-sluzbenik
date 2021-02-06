import {
  GET_APPEALS,
  GET_MY_RESPONSES,
  NOTIFY_OFFICIAL,
  RESPOND_TO_APPEAL,
  STORE_APPEALS,
  STORE_MY_RESPONSES,
} from "./commissioner.constants";
import * as constants from "./commissioner.constants";

export const getAppeals = () => ({
  type: GET_APPEALS,
});

export const storeAppeals = (payload) => ({
  type: STORE_APPEALS,
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

export const notifyOfficial = (payload) => ({
  type: NOTIFY_OFFICIAL,
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
