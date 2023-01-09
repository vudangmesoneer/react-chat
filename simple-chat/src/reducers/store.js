import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageReducer';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
