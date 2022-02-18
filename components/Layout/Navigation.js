import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../features/athentication/auth-slice";
import styles from './Navigation.module.css'

function Navigation() {
  const  isAuth  = useSelector((state) => state.auth.isAuth)

  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(authActions.removeUser())
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>Movies</div>
      </Link>
      <nav>
          <ul>
          {!isAuth && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isAuth && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isAuth && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          </ul>
      </nav>
    </header>
  );
}

export default Navigation;
