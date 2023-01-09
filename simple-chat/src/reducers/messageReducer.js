import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addMessagesToHead: (state, action) => {
      state.messages = action.payload.concat(state.messages);
    },
  },
});

export const { addMessage, addMessagesToHead } = messageSlice.actions;

export const selectMessages = (state) => state.message.messages;

export default messageSlice.reducer;
