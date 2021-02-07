import { put, call, select } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import { storeSnackbarMessages } from "../snackbar/snackbar.actions";
import {
  storeDecisionAppeals,
  storeMyResponses,
  storeXHTML,
  storePDF,
  storeDecisionPattern,
  storeSilenceAppeals,
  storeCreation,
} from "./commissioner.action";
import {
  getDecisionAppealsAPI,
  respondToAppealsAPI,
  getMyResponsesAPI,
  notifyOfficialDecisionAPI,
  notifyOfficialSilenceAPI,
  exportToXHTMLAPI,
  exportToPDFAPI,
  getDecisionPatternAPI,
  getSilenceAppealsAPI,
  sendResponseAPI,
} from "./commissioner.api";
import { selectCreation } from "./commissioner.selector";

export function* getDecisionAppealsSaga() {
  try {
    const appeals = yield call(apiRequest, getDecisionAppealsAPI());
    yield put(storeDecisionAppeals(appeals));
  } catch (e) {
    console.error(e);
  }
}

export function* getSilenceAppealsSaga() {
  try {
    const appeals = yield call(apiRequest, getSilenceAppealsAPI());
    yield put(storeSilenceAppeals(appeals));
  } catch (e) {
    console.error(e);
  }
}

export function* respondToAppealSaga(action) {
  try {
    const id = yield call(
      apiRequest,
      respondToAppealsAPI(action.payload.xml, action.payload.type)
    );
    yield put(storeCreation(id));
  } catch (e) {
    yield put(
      storeSnackbarMessages([
        {
          type: "error",
          message:
            "Process suspended. You are unable to create a response for this appeal",
        },
      ])
    );
    console.error(e);
  }
}

export function* sendResponseSaga(action) {
  try {
    const idDoc = yield select(selectCreation);
    const parser = new DOMParser();
    const document = parser.parseFromString(idDoc, "text/xml");

    const resenje = document.implementation.createDocument(
      null,
      `notificationEmailDto`
    );
    console.log("DOCUMENTT", document);
    const idNode = document.createElementNS(null, "documentId");
    idNode.appendChild(
      document.createTextNode(
        document.getElementsByTagName("documentId")[0].textContent
      )
    );
    resenje.documentElement.appendChild(idNode);

    const zalba = document.createElementNS(null, "zalbaProtivCutanja");
    zalba.appendChild(document.createTextNode(action.payload));
    resenje.documentElement.appendChild(zalba);

    const resenjeStr = new XMLSerializer().serializeToString(resenje);
    console.log("resnjee", resenje);
    console.log(resenjeStr);
    yield call(apiRequest, sendResponseAPI(resenjeStr));
    yield put(storeCreation(null));
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

export function* notifyOfficialDecisionSaga(action) {
  try {
    yield call(apiRequest, notifyOfficialDecisionAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* notifyOfficialSilenceSaga(action) {
  try {
    yield call(apiRequest, notifyOfficialSilenceAPI(action.payload));
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
