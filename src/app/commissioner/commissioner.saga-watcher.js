import { takeLatest } from "redux-saga/effects";
import {
  GET_APPEALS,
  GET_DECISION_PATTERN,
  GET_MY_RESPONSES,
  NOTIFY_OFFICIAL,
  RESPOND_TO_APPEAL,
} from "./commissioner.constants";
import {
  getAppealsSaga,
  getMyResponsesSaga,
  notifyOfficialSaga,
  respondToAppealSaga,
  getDecisionPatternSaga,
} from "./commissioner.saga";

export function* watchOfficialSaga() {
  yield takeLatest(GET_APPEALS, getAppealsSaga);
  yield takeLatest(RESPOND_TO_APPEAL, respondToAppealSaga);
  yield takeLatest(GET_MY_RESPONSES, getMyResponsesSaga);
  yield takeLatest(NOTIFY_OFFICIAL, notifyOfficialSaga);
  yield takeLatest(GET_DECISION_PATTERN, getDecisionPatternSaga);
}
