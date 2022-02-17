import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";

function SignUp() {
  const dispatch = useDispatch();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <AuthForm title="Sign in" handleAuthClick={handleSignUp} />;
}
export default SignUp;
