import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import InputContainer from './InputContainer';
import MessageContainer from './MessageContainer';
import HeaderContainer from './HeaderContainer';
import RegisterContainer from './RegisterContainer';
import { selectMessages } from '../reducers/messageReducer';
import { selectUserName } from '../reducers/userReducer';
import { loadMoreMessages } from '../functions/loadMoreMessages';

function App() {
  const userName = useSelector(selectUserName);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-restricted-globals
  addEventListener('focus', () => {
    loadMoreMessages(messages, dispatch);
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
