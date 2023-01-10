import { createSlice } from '@reduxjs/toolkit';

import { getMessagesFromLocalStorage } from '../helpers/getMessagesFromLocalStorage';
import { LOCAL_STORAGE_KEY, PAGE_SIZE } from '../helpers/constants';

const initialState = {
  messages: getMessagesFromLocalStorage([], LOCAL_STORAGE_KEY, PAGE_SIZE),
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      
    },
    reloadMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { addMessage, reloadMessages } = messageSlice.actions;

export const selectMessages = (state) => state.message.messages;

export default messageSlice.reducer;
