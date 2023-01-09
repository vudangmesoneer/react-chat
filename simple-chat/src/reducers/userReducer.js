import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;

export const selectUserName = (state) => state.user.name;

export default userSlice.reducer;
