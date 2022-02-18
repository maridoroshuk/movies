import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { authActions } from "../../features/athentication/auth-slice";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(authActions.setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/')

      })
      .catch(() => alert('Invalid email or password'));
  };

  return <AuthForm title="Login" handleAuthClick={handleLogin}/>;
}
export default LogIn;
