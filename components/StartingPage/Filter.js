import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../features/movies/movies-slice";
import styles from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();

  const activeGenre = useSelector((state) => state.movies.activeGenre);

  useEffect(() => {
    dispatch(moviesActions.replaceFiltered(activeGenre));
  }, [activeGenre]);

  const genreAllHandler = () => {
    dispatch(moviesActions.setActiveGenre(0));
  };
  const genreComedyHandler = () => {
    dispatch(moviesActions.setActiveGenre(35));
  };
  const genreActionHandler = () => {
    dispatch(moviesActions.setActiveGenre(28));
  };

  return (
    <div className={styles['filter-container']}>
      <button
        onClick={genreAllHandler}
        className={activeGenre === 0 ? styles.active : ""}
      >
        All
      </button>
      <button
        onClick={genreComedyHandler}
        className={activeGenre === 35 ? styles.active : ""}
      >
        Comedy
      </button>
      <button
        onClick={genreActionHandler}
        className={activeGenre === 28 ? styles.active : ""}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
