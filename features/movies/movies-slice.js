import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: [],
    filtered: [],
    activeGenre: 0,
    currentPage: 1,
    totalPages: 0,
    movie: {},
    isLoading: false,
    error: null
  },
  reducers: {
    setPopular(state, action) {
      state.popular = action.payload.results;
      state.totalPages = action.payload.total_pages
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
    setFiltered(state, action) {
      state.filtered = action.payload.results;
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
    serCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setIsLoading(state, action) {
      console.log(action)
      state.isLoading = action.payload
    },
    setError(state) {
      state.error = 'Something went wrong...'
    }
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
