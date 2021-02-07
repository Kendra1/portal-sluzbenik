import * as constants from "./citizen.constants";

export const sendDecisionAppeal = (payload) => ({
  type: constants.SEND_DECISION_APPEAL,
  payload,
});

export const sendSilenceAppeal = (payload) => ({
  type: constants.SEND_SILENCE_APPEAL,
  payload,
});

export const getMyDecisionAppeals = () => ({
  type: constants.GET_MY_DECISION_APPEALS,
});

export const storeMyDecisionAppeals = (payload) => ({
  type: constants.STORE_MY_DECISION_APPEALS,
  payload,
});

export const getMySilenceAppeals = () => ({
  type: constants.GET_MY_SILENCE_APPEALS,
});

export const storeMySilenceAppeals = (payload) => ({
  type: constants.STORE_MY_SILENCE_APPEALS,
  payload,
});

export const getMyDecisions = () => ({
  type: constants.GET_MY_DECISIONS,
});

export const storeMyDecisions = (payload) => ({
  type: constants.STORE_MY_DECISIONS,
  payload,
});

export const exportDecisionAppealToXHTML = (payload) => ({
  type: constants.EXPORT_DECISION_APPEAL_TO_XHTML,
  payload,
});

export const exportDecisionAppealToPDF = (payload) => ({
  type: constants.EXPORT_DECISION_APPEAL_TO_PDF,
  payload,
});

export const storeDecisionAppealXHTML = (payload) => ({
  type: constants.STORE_DECISION_APPEAL_XHTML,
  payload,
});

export const storeDecisionAppealPDF = (payload) => ({
  type: constants.STORE_DECISION_APPEAL_PDF,
  payload,
});

export const exportSilenceAppealToXHTML = (payload) => ({
  type: constants.EXPORT_SILENCE_APPEAL_TO_XHTML,
  payload,
});

export const exportSilenceAppealToPDF = (payload) => ({
  type: constants.EXPORT_SILENCE_APPEAL_TO_PDF,
  payload,
});

export const storeSilenceAppealXHTML = (payload) => ({
  type: constants.STORE_SILENCE_APPEAL_XHTML,
  payload,
});

export const storeSilenceAppealPDF = (payload) => ({
  type: constants.STORE_SILENCE_APPEAL_PDF,
  payload,
});

export const getDecisionAppealPattern = () => ({
  type: constants.GET_DECISION_APPEAL_PATTERN,
});

export const storeDecisionAppealPattern = (payload) => ({
  type: constants.STORE_DECISION_APPEAL_PATTERN,
  payload,
});

export const getSilenceAppealPattern = () => ({
  type: constants.GET_SILENCE_APPEAL_PATTERN,
});

export const storeSilenceAppealPattern = (payload) => ({
  type: constants.STORE_SILENCE_APPEAL_PATTERN,
  payload,
});

export const withdrawDecisionAppeal = (payload) => ({
  type: constants.WITHDRAW_DECISION_APPEAL,
  payload,
});

export const withdrawSilenceAppeal = (payload) => ({
  type: constants.WITHDRAW_SILENCE_APPEAL,
  payload,
});
