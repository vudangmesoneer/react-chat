import * as React from 'react';
import Paper from '@mui/material/Paper';

import './App.css';

import InputContainer from './InputContainer';
import MessageContainer from './MessageContainer';
import HeaderContainer from './HeaderContainer';

function App() {

  return (
    <Paper className='App' elevation={5}>
      <HeaderContainer />
      <MessageContainer />
      <InputContainer />
    </Paper>
  );
}

export default App;
