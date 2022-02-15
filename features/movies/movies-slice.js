import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: [],
    filtered: [],
    activeGenre: 0,
  },
  reducers: {
    setPopular(state, action) {
      state.popular = action.payload;
    },
    setFiltered(state, action) {
      state.filtered = action.payload;
    },

    replaceFiltered(state, action) {
      if (action.payload === 0) {
        state.filtered = state.popular;
        return;
      }
      const filteredMovies = state.popular.filter((movie) =>
        movie.genre_ids.includes(action.payload)
      );
      state.filtered = filteredMovies;
    },
    setActiveGenre(state, action) {
      state.activeGenre = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
