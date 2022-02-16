import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        token: '',
        isLoggedIn: false,
        isLoading: false,
    },
    reducers: {
        setInitialToken (state, action) {
            if(action.payload) {
                    state.token = action.payload
            }
            state.isLoggedIn = !!state.token
        },
        setIsLoggedIn (state, action) {
            state.isLoggedIn = !state.isLoggedIn
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
          }
      
    }
})


export const authActions = authSlice.actions;
export default authSlice;
