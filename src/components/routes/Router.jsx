import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { NavBar } from "../common/NavBar";
import { RedirectComponent } from "../common/RedirectComponent";
import { DecisionAppeal } from "../pages/DecisionAppeal";
import { SilenceAppeal } from "../pages/SilenceAppeal";
import { HandleAppeal } from "../pages/HandleAppeal";

import "../../assets/styles/index.css";
import { SingleDecisionAppeal } from "../pages/SingleDecisionAppeal";
import { SingleSilenceAppeal } from "../pages/SingleSilenceAppeal";
import { SingleDecision } from "../pages/SingleDecision";
import { RespondToAppeal } from "../pages/RespondToAppeal";
import { DecisionAppeals } from "../pages/DecisionAppeals";
import { SilenceAppeals } from "../pages/SilenceAppeals";

export const Router = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <PublicOnlyRoute path='/login' component={LoginPage} />
      <PublicOnlyRoute path='/registration' component={RegistrationPage} />
      <PrivateRoute path='/decisionAppeal' component={DecisionAppeal} />
      <PrivateRoute path='/silenceAppeal' component={SilenceAppeal} />
      <PrivateRoute
        path='/singleDecisionAppeal'
        component={SingleDecisionAppeal}
      />
      <PrivateRoute
        path='/singleSilenceAppeal'
        component={SingleSilenceAppeal}
      />
      <PrivateRoute path='/handleAppeal' component={HandleAppeal} />
      <PrivateRoute path='/respondToAppeal' component={RespondToAppeal} />
      <PrivateRoute path='/singleDecision' component={SingleDecision} />
      <PrivateRoute path='/myDecisionAppeals' component={DecisionAppeals} />
      <PrivateRoute path='/mySilenceAppeals' component={SilenceAppeals} />
      <PrivateRoute path='/' component={RedirectComponent} />
    </Switch>
  </BrowserRouter>
);
