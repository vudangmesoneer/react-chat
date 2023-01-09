import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

import './App.css';

import InputContainer from './InputContainer';
import MessageContainer from './MessageContainer';
import HeaderContainer from './HeaderContainer';
import RegisterContainer from './RegisterContainer';
import { selectUserName } from '../reducers/userReducer';

function App() {
  const userName = useSelector(selectUserName);

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
