import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import LogIn from "../components/Auth/LogIn";
import SignUp from "../components/Auth/SignUp";
import useAuth from "../hooks/useAuth";

function AuthPage() {
  const {isNewUser} = useAuth()
  console.log(isNewUser)
  
  return (
    <>
      {!isNewUser && <LogIn/> } 
      {isNewUser && <SignUp />}
      </>
  );
}

export default AuthPage;
