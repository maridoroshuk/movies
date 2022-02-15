import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/movies/movies-slice";


const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})

export default store