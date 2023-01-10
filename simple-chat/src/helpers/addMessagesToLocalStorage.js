export const addMessagesToLocalStorage = (currentMessages, key) => {
  if (Array.isArray(currentMessages) === false) {
    return;
  }

  let storedMessages = [];

  try {
    storedMessages = JSON.parse(localStorage.getItem(key));

    if (Array.isArray(storedMessages) === false) {
      storedMessages = [];
    }
  } catch (e) {
    storedMessages = [];
  }

  const notExistedMessages = currentMessages.filter((msg) => storedMessages.find((storedMsg) => storedMsg._id === msg._id) === undefined);
  const mergedMessages = storedMessages.concat(notExistedMessages);
  mergedMessages.sort((a, b) => new Date(a.date) - new Date(b.date));

  console.log('currentMessages: ', currentMessages);
  console.log('notExistedMessages: ', notExistedMessages);
  console.log('mergedMessages: ', mergedMessages);
  
  localStorage.setItem(key, JSON.stringify(mergedMessages));
};
