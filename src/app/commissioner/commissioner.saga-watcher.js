import { takeLatest } from "redux-saga/effects";
import {
  EXPORT_TO_PDF,
  EXPORT_TO_XHTML,
  GET_DECISION_APPEALS,
  GET_DECISION_PATTERN,
  GET_MY_RESPONSES,
  NOTIFY_OFFICIAL_SILENCE,
  RESPOND_TO_APPEAL,
  GET_SILENCE_APPEALS,
  NOTIFY_OFFICIAL_DECISION,
  SEND_RESPONSE,
} from "./commissioner.constants";
import {
  getDecisionAppealsSaga,
  getMyResponsesSaga,
  respondToAppealSaga,
  getDecisionPatternSaga,
  exportToPDFSaga,
  exportToXHTMLSaga,
  getSilenceAppealsSaga,
  notifyOfficialDecisionSaga,
  notifyOfficialSilenceSaga,
  sendResponseSaga,
} from "./commissioner.saga";

export function* watchOfficialSaga() {
  yield takeLatest(GET_DECISION_APPEALS, getDecisionAppealsSaga);
  yield takeLatest(GET_SILENCE_APPEALS, getSilenceAppealsSaga);
  yield takeLatest(RESPOND_TO_APPEAL, respondToAppealSaga);
  yield takeLatest(GET_MY_RESPONSES, getMyResponsesSaga);
  yield takeLatest(NOTIFY_OFFICIAL_DECISION, notifyOfficialDecisionSaga);
  yield takeLatest(NOTIFY_OFFICIAL_SILENCE, notifyOfficialSilenceSaga);
  yield takeLatest(GET_DECISION_PATTERN, getDecisionPatternSaga);
  yield takeLatest(EXPORT_TO_PDF, exportToPDFSaga);
  yield takeLatest(EXPORT_TO_XHTML, exportToXHTMLSaga);
  yield takeLatest(SEND_RESPONSE, sendResponseSaga);
}
