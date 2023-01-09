import * as React from 'react';
import Paper from '@mui/material/Paper';

import './App.css';

import InputContainer from './InputContainer';

function App() {

  return (
    <Paper className='App' elevation={5}>
      <header className='title'>Simple Web Chat</header>
      <main className='message-container'></main>
      <InputContainer />
    </Paper>
  );
}

export default App;
