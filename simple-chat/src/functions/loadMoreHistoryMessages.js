import _ from 'underscore';

import { reloadMessages } from '../reducers/messageReducer';
import { getHistoryMessagesFromLocalStorage } from '../helpers/getHistoryMessagesFromLocalStorage';
import { LOCAL_STORAGE_KEY, PAGE_SIZE } from '../helpers/constants';

export const loadMoreHistoryMessages = _.throttle((currentMessages, dispatchFunc) => {
  const messages = getHistoryMessagesFromLocalStorage(currentMessages, LOCAL_STORAGE_KEY, PAGE_SIZE);

  if (Array.isArray(messages)) {
    dispatchFunc(reloadMessages(messages));
  }
}, 200, { trailing: false });
