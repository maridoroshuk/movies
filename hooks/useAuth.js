import React from "react";
import { useSelector } from "react-redux";

function useAuth() {
  const { email, token, id } = useSelector((state) => state.auth);
  return {
    isAuth: !!emeail,
    email,
    token,
    id,
  };
}

export default useAuth;
