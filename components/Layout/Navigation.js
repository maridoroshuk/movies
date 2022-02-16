import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useToken from "../../hooks/useToken";
import styles from './Navigation.module.css'

function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { logout: logoutHandler } = useToken();
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>Movies</div>
      </Link>
      <nav>
          <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
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
