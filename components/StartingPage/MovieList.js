import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import styles from './MovieList.module.css'

const MovieList = () => {
  const popular = useSelector((state) => state.movies.popular)
  const filtered = useSelector((state) => state.movies.filtered)
  return (
    <motion.div layout className={styles['popular-movies']}>
      <AnimatePresence>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default MovieList;
