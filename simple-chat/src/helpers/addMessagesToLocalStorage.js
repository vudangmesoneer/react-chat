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
  
  localStorage.setItem(key, JSON.stringify(mergedMessages));
};
