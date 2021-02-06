import { createSelector } from "reselect";

const _selectDecisionAppeals = (state) => state.commissioner.decisionAppeals;

const _selectSilenceAppeals = (state) => state.commissioner.silenceAppeals;

const _selectResponses = (state) => state.commissioner.responses;

const _selectDecisionPattern = (state) => state.commissioner.pattern;

const _selectCurrentDecisionPDF = (state) => state.commissioner.currentPDF;

const _selectCurrentDecisionXHTML = (state) => state.commissioner.currentXHTML;

const _selectCreation = (state) => state.commissioner.creation;

export const selectDecisionAppeals = createSelector(
  [_selectDecisionAppeals],
  (decisionAppeals) => decisionAppeals
);

export const selectSilenceAppeals = createSelector(
  [_selectSilenceAppeals],
  (silenceAppeals) => silenceAppeals
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

export const selectCreation = createSelector(
  [_selectCreation],
  (creation) => creation
);
