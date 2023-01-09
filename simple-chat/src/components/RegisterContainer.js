import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import './RegisterContainer.css';

import { changeName } from '../reducers/userReducer';

function RegisterContainer() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    if (name) {
      dispatch(changeName(name));
    }
  };

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <main className='register-form'>
      <p className='register-form__header'>Register an account</p>
      <TextField
        className='register-form__input'
        variant='outlined'
        label='Name'
        value={name}
        onChange={handleChange}
        placeholder='Your name'
        onKeyDown={handleKey}
      />
      <div className='register-form__separated'></div>
      <div className='register-form__button'>
        <Button variant='outlined' onClick={handleClick}>Confirm</Button>
      </div>
      
    </main>
  );
}

export default RegisterContainer;
