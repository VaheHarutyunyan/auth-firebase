/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.email = action.payload.email),
        (state.token = action.payload.token),
        (state.id = action.payload.id);
    },
    setRemoveUser: state => {
      (state.email = null), (state.token = null), (state.id = null);
    },
  },
});

export const {setUser, setRemoveUser} = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
