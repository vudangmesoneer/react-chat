import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';

import './MessageContainer.css';

import { selectMessages } from '../reducers/messageReducer';
import { selectUserName } from '../reducers/userReducer';

function MessageContainer() {
  const messages = useSelector(selectMessages);
  const userName = useSelector(selectUserName);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const messageContainer = useRef(null);

  useEffect(() => {
    if (isAtBottom) {
      messageContainer.current.scrollTo(0, messageContainer.current.scrollHeight);
    }
  }, [messages, isAtBottom]);

  const handleMessageContainerScroll = (event) => {
    const scrollThreshold = 100;

    if (event.target.scrollTop + scrollThreshold >= event.target.scrollHeight - event.target.clientHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  return (
    <main className='message-container' ref={messageContainer} onScroll={handleMessageContainerScroll}>
      {
        messages.map((msg) => {
          if (msg.userName === userName) {
            // right hand self messages
            return <div className='message message--right' key={msg._id}>
              <Tooltip title={msg.userName} placement='right'>
                <AccountCircleIcon sx={{ width: '40px', height: '40px', marginLeft: '10px' }} />
              </Tooltip>
              <div className='message-content'>{msg.message}</div>
            </div>;
          } else {
            // left hand others' messages
            return <div className='message message--left' key={msg._id}>
              <Tooltip title={msg.userName} placement='left'>
                <AccountCircleIcon sx={{ width: '40px', height: '40px', marginRight: '10px' }} />
              </Tooltip>
              <div className='message-content'>{msg.message}</div>
            </div>;
          }
        })
      }
    </main>
  );
}

export default MessageContainer;
