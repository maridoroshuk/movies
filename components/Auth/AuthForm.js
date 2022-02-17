import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../features/athentication/auth-slice";
import useToken from "../../hooks/useToken";
import styles from "./AuthForm.module.css";

function AuthForm({ title, handleAuthClick }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = () => {};

  return (
    <section className={styles.auth}>
      <h1>{title}</h1>
      <form onSubmit={submitHandler}>
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
          <button
            type="button"
            onClick={() => handleAuthClick(email, pass)}>
            {title}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
