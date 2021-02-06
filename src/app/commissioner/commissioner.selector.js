import { createSelector } from "reselect";

const _selectAppeals = (state) => state.commissioner.appeals;

const _selectResponses = (state) => state.commissioner.responses;

const _selectDecisionPattern = (state) => state.commissioner.pattern;

const _selectCurrentDecisionPDF = (state) => state.commissioner.currentPDF;

const _selectCurrentDecisionXHTML = (state) => state.commissioner.currentXHTML;

export const selectAppeals = createSelector(
  [_selectAppeals],
  (appeals) => appeals
);

export const selectResponses = createSelector(
  [_selectResponses],
  (responses) => responses
);

export const selectDecisionPattern = createSelector(
  [_selectDecisionPattern],
  (pattern) => pattern
);

export const selectCurrentDecisionPDF = createSelector(
  [_selectCurrentDecisionPDF],
  (currentPDF) => currentPDF
);

export const selectCurrentDecisionXHTML = createSelector(
  [_selectCurrentDecisionXHTML],
  (currentXHTML) => currentXHTML
);
