import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'underscore';

import './App.css';

import InputContainer from './InputContainer';
import MessageContainer from './MessageContainer';
import HeaderContainer from './HeaderContainer';
import RegisterContainer from './RegisterContainer';
import { selectMessages, reloadMessages } from '../reducers/messageReducer';
import { selectUserName } from '../reducers/userReducer';
import { getMessagesFromLocalStorage } from '../helpers/getMessagesFromLocalStorage';
import { LOCAL_STORAGE_KEY, PAGE_SIZE } from '../helpers/constants';

const callback = _.throttle((currentMessages, key, pageSize, dispatchFunc) => {
  const messages = getMessagesFromLocalStorage(currentMessages, key, pageSize);

  if (Array.isArray(messages)) {
    dispatchFunc(reloadMessages(messages));
  }
}, 200, { trailing: false });

function App() {
  const userName = useSelector(selectUserName);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-restricted-globals
  addEventListener('focus', () => {
    callback(messages, LOCAL_STORAGE_KEY, PAGE_SIZE, dispatch);
  });

  return (
    <Paper className='App' elevation={5}>
      <HeaderContainer />
      {
        userName === '' ? <RegisterContainer /> : <><MessageContainer /><InputContainer /></>
      }
      
    </Paper>
  );
}

export default App;
