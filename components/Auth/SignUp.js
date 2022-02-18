import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { authActions } from "../../features/athentication/auth-slice";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        dispatch(authActions.setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/')

      })
      .catch(console.error);
  };

  return <AuthForm title="Sign up" handleAuthClick={handleSignUp} />;
}
export default SignUp;
