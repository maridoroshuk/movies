import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    email: "",
    isAuth: false,
    id: "",
    isNewUser: false
  },
  reducers: {
    setInitialToken(state, action) {
      if (action.payload) {
        state.token = action.payload;
      }
      state.isLoggedIn = !!state.token;
    },
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuth = true
    },
    removeUser(state) {
        state.email = null;
        state.token = null;
        state.id = null;
        state.isAuth = false
        state.isNewUser = false
    },
    createNewUser(state) {
      state.isNewUser = !state.isNewUser
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice;
