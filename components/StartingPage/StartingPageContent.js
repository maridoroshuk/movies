import React from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";
import styles from './StartingPageContent.module.css'

function StartingPageContent() {
  return (
    <div className={styles['main-container']}>
      <Filter />
      <MovieList />
    </div>
  );
}

export default StartingPageContent;
