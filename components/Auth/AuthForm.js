import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../features/athentication/auth-slice";
import useToken from "../../hooks/useToken";
import styles from './AuthForm.module.css'

function AuthForm() {
  const login = useToken()
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLogin = useSelector((state) => state.auth.isLoggedIn)
  const isLoading = useSelector((state) => state.auth.isLoading)

  const switchAuthModeHandler = () => {
    dispatch(authActions.setIsLoggedIn())
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value

    dispatch(authActions.setIsLoading(true))

    let url;
    if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      dispatch(authActions.setIsLoading(false))
      if(res.ok) {
        return res.json()
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed!';

          throw new Error(errorMessage)
        })
      }
    })
    .then((data) => {
      const expirationTime = new Date (
        new Date().getTime() + +data.expiresIn * 1000
      )
      login(data.idToken, expirationTime.toISOString())
      navigate('/')
    })
    .catch((err) => {
      alert(err.message)
    })
  }
  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
        <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={styles.control}>
        <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
        {!isLoading && (
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
        )}
        {isLoading && <p>Sending request...</p>}
        <button
          type='button'
          className={styles.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
        </div>
      </form>

    </section>
  )
}

export default AuthForm;
