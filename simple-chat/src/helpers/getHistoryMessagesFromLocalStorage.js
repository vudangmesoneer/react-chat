export const getHistoryMessagesFromLocalStorage = (currentMessages, key, pageSize) => {
  if (Array.isArray(currentMessages) === false) {
    return;
  }

  let storedMessages = [];
  let mergedMessages = [];

  try {
    storedMessages = JSON.parse(localStorage.getItem(key));

    if (Array.isArray(storedMessages) === false) {
      storedMessages = [];
    }
  } catch (e) {
    storedMessages = [];
  }

  const notExistedMessages = currentMessages.filter((msg) => storedMessages.find((storedMsg) => storedMsg._id === msg._id) === undefined);

  if (notExistedMessages.length > 0) {
    // the store has been changed, update it again
    mergedMessages = storedMessages.concat(notExistedMessages);
    mergedMessages.sort((a, b) => new Date(a.date) - new Date(b.date));
  
    localStorage.setItem(key, JSON.stringify(mergedMessages));
  } else {
    mergedMessages = storedMessages;
  }

  // return the last 25 messages
  if (currentMessages.length === 0) {
    const end = mergedMessages.length;

    if (end < pageSize) {
      return mergedMessages;
    }

    const start = end - pageSize;

    return mergedMessages.slice(start, end);
  }

  // find the first index of current message in the array, because the merged message are sorted by date already.
  const idx = mergedMessages.findIndex((msg) => msg._id === currentMessages[0]._id);

  // return from the first index with previous 25 messages, if has
  if (idx < pageSize) {
    return mergedMessages;
  }

  const start = idx - pageSize;
  const end = mergedMessages.length;
  return mergedMessages.slice(start, end);
};
