import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    email: "",
    id: "",
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
    },
    removeUser(state) {
        state.email = null;
        state.token = null;
        state.id = null;
  
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
