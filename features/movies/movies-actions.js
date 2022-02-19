import { moviesActions } from "./movies-slice";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const fetchPopular = (page) => {
  return async (dispatch) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=349f5f043e5262f4f0acbcb422997c26&language=en-US&page=${page}`;
      const movies = await fetchData(url);
      dispatch(moviesActions.setPopular(movies));
      dispatch(moviesActions.setFiltered(movies));
    } catch (error) {
      dispatch(moviesActions.setError())
    } finally {
    }
  };
};

export const fetchMovieDetails = (movie_id) => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setIsLoading(true))
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=349f5f043e5262f4f0acbcb422997c26&language=en-US`;
      const movie = await fetchData(url);
      dispatch(moviesActions.setMovie(movie));

    } catch (error) {
      dispatch(moviesActions.setError())
    } finally {
      dispatch(moviesActions.setIsLoading(false))
    }
  };
};
