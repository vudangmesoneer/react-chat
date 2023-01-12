import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { v4 as uuidv4 } from 'uuid';

import './InputContainer.css';

import { addMessagesToLocalStorage } from '../helpers/addMessagesToLocalStorage';
import { addMessage } from '../reducers/messageReducer';
import { selectUserName } from '../reducers/userReducer';
import { LOCAL_STORAGE_KEY } from '../helpers/constants';

function InputContainer() {
  const [message, setMessage] = useState('');
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if (message) {
      const newMessage = { _id: uuidv4(), message, userName, date: (new Date()).toISOString() };
      dispatch(addMessage(newMessage));
      addMessagesToLocalStorage([newMessage], LOCAL_STORAGE_KEY);
      setMessage('');
    }
  };

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <footer className='input-container'>
      <section className='input-box'>
        <TextField
          className='input-text'
          variant='outlined'
          value={message}
          onChange={handleChange}
          placeholder='Your message'
          onKeyDown={handleKey}
        />
        <IconButton aria-label='delete' onClick={handleClick}>
          <SendRoundedIcon fontSize='large' />
        </IconButton>
      </section>
    </footer>
  );
}

export default InputContainer;
