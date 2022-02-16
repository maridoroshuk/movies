import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../features/athentication/auth-slice";

function useToken() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  let logoutTimer;

  const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime;
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };

  const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 3600) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      return null;
    }
    dispatch(authActions.setInitialToken(storedToken))

    return {
      token: storedToken,
      duration: remainingTime,
    };
  };

  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    dispatch(authActions.setInitialToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    dispatch(authActions.setInitialToken(token));
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(loginHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  return {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler

  };
}

export default useToken;
