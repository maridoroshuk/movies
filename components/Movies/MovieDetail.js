import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../features/movies/movies-actions";
import styles from "./MovieDetails.module.css";
import uniqid from 'uniqid';
import Loader from "../Loader/Loader";

function MovieDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const isLoading = useSelector((state) => state.movies.isLoading)

  useEffect(() => {
    dispatch(fetchMovieDetails(params.id));
  }, [dispatch]);
  const {
    title,
    original_title,
    backdrop_path,
    overview,
    release_date,
    genres,
  } = movie;
  const release = new Date(release_date);
//   let uniqKey = uniqid() + movie.id
  return (
      <>
      {isLoading && <div className={styles.loader}><Loader/></div>}
      {!isLoading  && <div className={styles.container}>
      <section className={styles.description}>
        <div>
          <h1>{title}</h1>
          <span className={styles.org_title}>({original_title})</span>
          <p>
            <b>{release.getFullYear()}</b>
          </p>
          <p>
            Genres:
            {genres?.map((el) => (
            <p className={styles.genres} key={uniqid()}> {el.name}</p>
          ))}
          </p>
          <p>{overview}</p>
        </div>
      </section>
      <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt="" />
    </div>
}
    </>
);
}

export default MovieDetail;
