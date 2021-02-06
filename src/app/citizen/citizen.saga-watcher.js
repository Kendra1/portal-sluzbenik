import { takeLatest } from "redux-saga/effects";
import {
  EXPORT_DECISION_APPEAL_TO_PDF,
  EXPORT_DECISION_APPEAL_TO_XHTML,
  EXPORT_SILENCE_APPEAL_TO_PDF,
  EXPORT_SILENCE_APPEAL_TO_XHTML,
  GET_DECISION_APPEAL_PATTERN,
  GET_MY_DECISIONS,
  GET_MY_DECISION_APPEALS,
  GET_MY_SILENCE_APPEALS,
  GET_SILENCE_APPEAL_PATTERN,
  SEND_DECISION_APPEAL,
  SEND_SILENCE_APPEAL,
} from "./citizen.constants";
import {
  exportDecisionAppealToPDFSaga,
  exportDecisionAppealToXHTMLSaga,
  exportSilenceAppealToPDFSaga,
  exportSilenceAppealToXHTMLSaga,
  getDecisionAppealPatternSaga,
  getMyDecisionAppealsSaga,
  getMyDecisionsSaga,
  getMySilenceAppealsSaga,
  getSilenceAppealPatternSaga,
  sendDecisionAppealSaga,
  sendSilenceApealSaga,
} from "./citizen.saga";

export function* watchCitizenSaga() {
  yield takeLatest(SEND_DECISION_APPEAL, sendDecisionAppealSaga);
  yield takeLatest(SEND_SILENCE_APPEAL, sendSilenceApealSaga);
  yield takeLatest(GET_MY_DECISION_APPEALS, getMyDecisionAppealsSaga);
  yield takeLatest(GET_MY_SILENCE_APPEALS, getMySilenceAppealsSaga);
  yield takeLatest(GET_MY_DECISIONS, getMyDecisionsSaga);
  yield takeLatest(GET_DECISION_APPEAL_PATTERN, getDecisionAppealPatternSaga);
  yield takeLatest(GET_SILENCE_APPEAL_PATTERN, getSilenceAppealPatternSaga);
  yield takeLatest(
    EXPORT_DECISION_APPEAL_TO_PDF,
    exportDecisionAppealToPDFSaga
  );
  yield takeLatest(
    EXPORT_DECISION_APPEAL_TO_XHTML,
    exportDecisionAppealToXHTMLSaga
  );
  yield takeLatest(EXPORT_SILENCE_APPEAL_TO_PDF, exportSilenceAppealToPDFSaga);
  yield takeLatest(
    EXPORT_SILENCE_APPEAL_TO_XHTML,
    exportSilenceAppealToXHTMLSaga
  );
}
