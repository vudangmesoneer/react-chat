import { useSelector } from 'react-redux';

import './MessageContainer.css';

import { selectMessages } from '../reducers/messageReducer';

function MessageContainer() {
  const messages = useSelector(selectMessages);

  console.log('messages: ', messages);

  return (
    <main className='message-container'></main>
  );
}

export default MessageContainer;
