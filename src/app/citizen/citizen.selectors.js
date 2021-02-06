import { createSelector } from "reselect";

const _selectDecisionAppeals = (state) => state.citizen.decisionAppeals;

const _selectSilenceAppeals = (state) => state.citizen.silenceAppeals;

const _selectDecisions = (state) => state.citizen.decisions;

const _selectDecisionPattern = (state) => state.citizen.decisionAppealPattern;

const _selectSilencePattern = (state) => state.citizen.silenceAppealPattern;

const _selectCurrentDecisionAppealXHTML = (state) =>
  state.citizen.currentDecisionAppealXHTML;

const _selectCurrentDecisionAppealPDF = (state) =>
  state.citizen.currentDecisionAppealPDF;

const _selectCurrentSilenceAppealXHTML = (state) =>
  state.citizen.currentSilenceAppealXHTML;

const _selectCurrentSilenceAppealPDF = (state) =>
  state.citizen.currentSilenceAppealPDF;

export const selectDecisionAppeals = createSelector(
  [_selectDecisionAppeals],
  (decisionAppeals) => decisionAppeals
);

export const selectSilenceAppeals = createSelector(
  [_selectSilenceAppeals],
  (silenceAppeals) => silenceAppeals
);

export const selectDecisions = createSelector(
  [_selectDecisions],
  (decisions) => decisions
);

export const selectDecisionAppealPattern = createSelector(
  [_selectDecisionPattern],
  (decisionAppealPattern) => decisionAppealPattern
);

export const selectSilencePattern = createSelector(
  [_selectSilencePattern],
  (silenceAppealPattern) => silenceAppealPattern
);

export const selectCurrentDecisionAppealXHTML = createSelector(
  [_selectCurrentDecisionAppealXHTML],
  (currentDecisionAppealXHTML) => currentDecisionAppealXHTML
);

export const selectCurrentDecisionAppealPDF = createSelector(
  [_selectCurrentDecisionAppealPDF],
  (currentDecisionAppealPDF) => currentDecisionAppealPDF
);

export const selectCurrentSilenceAppealXHTML = createSelector(
  [_selectCurrentSilenceAppealXHTML],
  (currentSilenceAppealXHTML) => currentSilenceAppealXHTML
);

export const selectCurrentSilenceAppealPDF = createSelector(
  [_selectCurrentSilenceAppealPDF],
  (currentSilenceAppealPDF) => currentSilenceAppealPDF
);
