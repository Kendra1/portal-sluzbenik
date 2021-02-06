import * as constants from "./registration-form.constants";

export const storeIsLoadingValue = (
  payload
) => ({
  type: constants.STORE_IS_LOADING_VALUE,
  payload,
});

export const setIsLoadingValue = (
  payload
) => ({
  type: constants.SET_IS_LOADING_VALUE,
  payload,
});
