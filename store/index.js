import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/athentication/auth-slice";
import moviesSlice from "../features/movies/movies-slice";


const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store