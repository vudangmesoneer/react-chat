import { useSelector } from 'react-redux';

import './HeaderContainer.css';

import { selectUserName } from '../reducers/userReducer';

function HeaderContainer() {
  const userName = useSelector(selectUserName);

  return (
    <header className='header-container'>
      <p className='header-container__title'>Simple Web Chat</p>
      {
        userName ? <p className='header-container__salutation'>Hi {userName}</p> : <></>
      }
    </header>
  );
}

export default HeaderContainer;
