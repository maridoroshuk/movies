import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Filter from "./Filter";
import MovieList from "./MovieList";
import styles from './StartingPageContent.module.css'

function StartingPageContent() {
  const isLoading = useSelector((state) => state.movies.isLoading)
  console.log(isLoading)
  return (
    <div className={styles['main-container']}>
     
      <Filter />
      {isLoading && <Loader/>}
      {!isLoading &&  <MovieList />}
    </div>
  );
}

export default StartingPageContent;
