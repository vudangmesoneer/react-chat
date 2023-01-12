import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageReducer';
import userReducer from './userReducer';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
  },
});
