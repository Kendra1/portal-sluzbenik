import { call, put, select } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  getMyDecisionAppealsAPI,
  getMyDecisionsAPI,
  getMySilenceAppealsAPI,
  sendDecisionAppealAPI,
  sendSilenceAppealAPI,
  exportDecisionAppealToXHTMLAPI,
  exportDecisionAppealToPDFAPI,
  exportSilenceAppealToXHTMLAPI,
  exportSilenceAppealToPDFAPI,
  getSilenceAppealPatternAPI,
  getDecisionAppealPatternAPI,
} from "./citizen.api";
import {
  storeDecisionAppealPattern,
  storeDecisionAppealXHTML,
  storeMyDecisionAppeals,
  storeMyDecisions,
  storeMySilenceAppeals,
  storeSilenceAppealPattern,
  storeDecisionAppealPDF,
  storeSilenceAppealXHTML,
  storeSilenceAppealPDF,
} from "./citizen.actions";
import { selectLoggedUser } from "../auth/auth.selectors";

export function* sendDecisionAppealSaga(action) {
  try {
    yield call(apiRequest, sendDecisionAppealAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* sendSilenceApealSaga(action) {
  try {
    yield call(apiRequest, sendSilenceAppealAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* getMyDecisionAppealsSaga() {
  try {
    const decisionAppeals = yield call(apiRequest, getMyDecisionAppealsAPI());
    yield put(storeMyDecisionAppeals(decisionAppeals));
  } catch (e) {
    console.error(e);
  }
}

export function* getMySilenceAppealsSaga() {
  try {
    const silenceAppeals = yield call(apiRequest, getMySilenceAppealsAPI());
    yield put(storeMySilenceAppeals(silenceAppeals));
  } catch (e) {
    console.error(e);
  }
}

export function* getMyDecisionsSaga() {
  try {
    const decisions = yield call(apiRequest, getMyDecisionsAPI());
    yield put(storeMyDecisions(decisions));
  } catch (e) {
    console.error(e);
  }
}

export function* exportDecisionAppealToXHTMLSaga(action) {
  try {
    const XHTMLRequest = yield call(
      apiRequest,
      exportDecisionAppealToXHTMLAPI(action.payload)
    );

    yield put(storeDecisionAppealXHTML(XHTMLRequest));
  } catch (e) {
    console.error(e);
  }
}

export function* exportDecisionAppealToPDFSaga(action) {
  try {
    const PDFRequest = yield call(
      apiRequest,
      exportDecisionAppealToPDFAPI(action.payload)
    );
    let binaryString = window.atob(PDFRequest);

    let binaryLen = binaryString.length;

    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      let ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    const file = new Blob([bytes], { type: "application/pdf" });
    yield put(storeDecisionAppealPDF(file));
  } catch (e) {
    console.error(e);
  }
}

export function* exportSilenceAppealToXHTMLSaga(action) {
  try {
    const XHTMLRequest = yield call(
      apiRequest,
      exportSilenceAppealToXHTMLAPI(action.payload)
    );

    yield put(storeSilenceAppealXHTML(XHTMLRequest));
  } catch (e) {
    console.error(e);
  }
}

export function* exportSilenceAppealToPDFSaga(action) {
  try {
    const PDFRequest = yield call(
      apiRequest,
      exportSilenceAppealToPDFAPI(action.payload)
    );
    let binaryString = window.atob(PDFRequest);

    let binaryLen = binaryString.length;

    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      let ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    const file = new Blob([bytes], { type: "application/pdf" });
    yield put(storeSilenceAppealPDF(file));
  } catch (e) {
    console.error(e);
  }
}

export function* getDecisionAppealPatternSaga() {
  try {
    const pattern = yield call(apiRequest, getDecisionAppealPatternAPI());
    yield put(storeDecisionAppealPattern(pattern));
  } catch (e) {
    console.error(e);
  }
}

export function* getSilenceAppealPatternSaga() {
  try {
    const pattern = yield call(apiRequest, getSilenceAppealPatternAPI());
    yield put(storeSilenceAppealPattern(pattern));
  } catch (e) {
    console.error(e);
  }
}
