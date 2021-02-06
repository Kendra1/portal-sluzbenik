import { combineReducers } from "redux";

import { authReducer } from "./auth/auth.reducer";
import { initReducer } from "./init/init.reducer";
import { loginFormReducer } from "./login-form/login-form.reducer";
import { snackbarReducer } from "./snackbar/snackbar.reducer";
import { registrationFormReducer } from "./registration-form/registration-form.reducer";
import { citizenReducer } from "./citizen/citizen.reducer";
import { commissionerReducer } from "./commissioner/commissioner.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  init: initReducer,
  loginForm: loginFormReducer,
  snackbar: snackbarReducer,
  registrationForm: registrationFormReducer,
  citizen: citizenReducer,
  commissioner: commissionerReducer,
});
