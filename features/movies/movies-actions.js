import { moviesActions } from "./movies-slice";


const fetchData = async () => {
    const response = await fetch(
        " https://api.themoviedb.org/3/movie/popular?api_key=349f5f043e5262f4f0acbcb422997c26&language=en-US&page=1"
      );
      const data = await response.json()
      return data
}
export const fetchPopular = () => {
  return async (dispatch) => {
    try {
        const movies = await fetchData();
        dispatch(moviesActions.setPopular(movies.results));
        dispatch(moviesActions.setFiltered(movies.results));
    } catch {}
}}


