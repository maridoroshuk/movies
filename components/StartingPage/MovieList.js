import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopular } from "../../features/movies/movies-actions";
import { moviesActions } from "../../features/movies/movies-slice";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.movies.currentPage);
  const perPage = useSelector((state) => state.movies.perPage);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const filtered = useSelector((state) => state.movies.filtered);

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(fetchPopular(currentPage, perPage));
  }, [dispatch, currentPage]);

  return (
    <>
      <motion.div layout className={styles["popular-movies"]}>
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
      <div className={styles.pages}>
        {pages.map((page, index) => (
          <button
            key={index}
            className={
              currentPage === page
                ? `${styles.page} ${styles.active}`
                : styles.page
            }
            onClick={() => dispatch(moviesActions.serCurrentPage(page))}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default MovieList;
