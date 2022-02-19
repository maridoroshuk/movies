import React from "react";
import { motion } from "framer-motion";
import styles from './Movie.module.css'
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.3}}
      layout
    >
      <Link to={`/movie/${movie.id}`}>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      /></Link>
    </motion.div>
  );
}

export default Movie;
