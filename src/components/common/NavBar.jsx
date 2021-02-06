import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useNavbarStyle } from "../../assets/styles/navbar";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../app/auth/auth.actions";
import { selectLoggedUser } from "../../app/auth/auth.selectors";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navbarStyle = useNavbarStyle();
  const history = useHistory();

  const loggedUser = useSelector(selectLoggedUser);

  const logout = () => {
    dispatch(logoutUser());
    history.push("login");
  };

  const login = () => {
    history.push("login");
  };

  const registrate = () => {
    history.push("registration");
  };

  const sendDecisionAppeal = () => {
    history.push("decisionAppeal");
  };

  const sendDecisionSilence = () => {
    history.push("silenceAppeal");
  };

  const myDecisionAppeals = () => {
    history.push("/myDecisionAppeals");
  };

  const mySilenceAppeals = () => {
    history.push("/mySilenceAppeals");
  };

  const myResponses = () => {
    history.push("citizenDashboard");
  };

  const appeals = () => {
    history.push("dashboard");
  };

  const responses = () => {
    history.push("requestAnswers");
  };

  console.log(loggedUser);
  return (
    <AppBar position='static' className={navbarStyle.navbar}>
      <Toolbar>
        {loggedUser ? (
          <>
            {loggedUser && loggedUser.role === "ROLE_GRADJANIN" ? (
              <>
                <Button color='inherit' onClick={sendDecisionAppeal}>
                  Send Appeal on Decision
                </Button>
                <Button color='inherit' onClick={sendDecisionSilence}>
                  Send Appeal on Silence
                </Button>
                <Button color='inherit' onClick={myDecisionAppeals}>
                  My Decision Appeals
                </Button>
                <Button color='inherit' onClick={mySilenceAppeals}>
                  My Silence Appeals
                </Button>
                <Button color='inherit' onClick={myResponses}>
                  Responses
                </Button>
              </>
            ) : (
              <>
                <Button color='inherit' onClick={appeals}>
                  Appeals
                </Button>
                <Button color='inherit' onClick={responses}>
                  Request Answers
                </Button>
              </>
            )}

            <Button color='inherit' onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color='inherit' onClick={login}>
              Login
            </Button>
            <Button color='inherit' onClick={registrate}>
              Registrate
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
