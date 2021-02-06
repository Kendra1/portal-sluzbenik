import { put, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  storeAppeals,
  storeMyResponses,
  storeXHTML,
  storePDF,
  storeDecisionPattern,
} from "./commissioner.action";
import {
  getAppealsAPI,
  respondToAppealsAPI,
  getMyResponsesAPI,
  notifyOfficialAPI,
  exportToXHTMLAPI,
  exportToPDFAPI,
  getDecisionPatternAPI,
} from "./commissioner.api";

export function* getAppealsSaga(action) {
  try {
    const appeals = yield call(apiRequest, getAppealsAPI(action.payload));
    yield put(storeAppeals(appeals));
  } catch (e) {
    console.error(e);
  }
}

export function* respondToAppealSaga(action) {
  try {
    yield call(apiRequest, respondToAppealsAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* getMyResponsesSaga() {
  try {
    const responses = yield call(apiRequest, getMyResponsesAPI());
    yield put(storeMyResponses(responses));
  } catch (e) {
    console.error();
  }
}

export function* notifyOfficialSaga(action) {
  try {
    yield call(apiRequest, notifyOfficialAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* exportToXHTMLSaga(action) {
  try {
    const XHTMLRequest = yield call(
      apiRequest,
      exportToXHTMLAPI(action.payload)
    );
    yield put(storeXHTML(XHTMLRequest));
  } catch (e) {
    console.error(e);
  }
}

export function* exportToPDFSaga(action) {
  try {
    const PDFRequest = yield call(apiRequest, exportToPDFAPI(action.payload));
    let binaryString = window.atob(PDFRequest);

    let binaryLen = binaryString.length;

    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      let ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    const file = new Blob([bytes], { type: "application/pdf" });
    yield put(storePDF(file));
  } catch (e) {
    console.error(e);
  }
}

export function* getDecisionPatternSaga() {
  try {
    const pattern = yield call(apiRequest, getDecisionPatternAPI());
    yield put(storeDecisionPattern(pattern));
  } catch (e) {
    console.error(e);
  }
}
