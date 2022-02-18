import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../features/athentication/auth-slice";
import useAuth from "../../hooks/useAuth";
import styles from "./AuthForm.module.css";

function AuthForm({ title, handleAuthClick }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { isNewUser } = useAuth()

  const createAccountHandler = () => {
    dispatch(authActions.createNewUser())
  }

  return (
    <section className={styles.auth}>
      <h1>{title}</h1>
      <form>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button type="button"
          onClick={() => handleAuthClick(email, pass)}>
            {title}
          </button>
          {!isNewUser && <button
            className={styles.toggle}
            type="button"
            onClick={createAccountHandler}
          >
            Create account
          </button>
          }
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
