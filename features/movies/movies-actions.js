import { moviesActions } from "./movies-slice";


const fetchData = async (page, perPage) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=349f5f043e5262f4f0acbcb422997c26&language=en-US&page=${page}`
      );
      const data = await response.json()
      console.log(data)
      return data
}
export const fetchPopular = (page, perPage) => {
  return async (dispatch) => {
    try {
        const movies = await fetchData(page, perPage);
        dispatch(moviesActions.setPopular(movies));
        dispatch(moviesActions.setFiltered(movies));
    } catch {}
}}


