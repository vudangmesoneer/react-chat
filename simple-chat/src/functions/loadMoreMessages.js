import _ from 'underscore';

import { reloadMessages } from '../reducers/messageReducer';
import { getCurrentMessagesFromLocalStorage } from '../helpers/getCurrentMessagesFromLocalStorage';
import { LOCAL_STORAGE_KEY, PAGE_SIZE } from '../helpers/constants';

export const loadMoreMessages = _.throttle((currentMessages, dispatchFunc) => {
  const messages = getCurrentMessagesFromLocalStorage(currentMessages, LOCAL_STORAGE_KEY, PAGE_SIZE);

  if (Array.isArray(messages)) {
    dispatchFunc(reloadMessages(messages));
  }
}, 200, { trailing: false });
