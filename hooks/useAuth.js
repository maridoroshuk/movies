import React from "react";
import { useSelector } from "react-redux";

function useAuth() {
  const { email, token, id, isNewUser } = useSelector((state) => state.auth);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    isNewUser
  };
}

export default useAuth;
