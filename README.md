# A simple web chat

This project is a simple web chat on client only.

## Requirements

Please develop a simple web chat.

1. Before entering the chat, the user is prompted to enter his name, which is further used to identify his messages.
2. Implement saving messages in memory (on the local machine, in localstorage or somewhere else, without a backend).
3. Each new browser tab is a new chat user. Each new browser tab is a new chat user. The new messages in the chat room should be updated to all opened tabs (live updating for all users). Not use socket.io all.
4. Implement functionality for sending messages to chat.
5. Implement functionality for show message history, and load more messages when scroll chats to the top. (page size = 25)
6. Please write tests on features where they are needed for you think.

## Information

Before beginning to code, I clarify some information based on the requirements.

- From points 1 and 3, each tab is a user with a name.
- This web application only has a client site, according to points 2 and 3.There must not be a server side to interact with.
- From points 4 and 5, the UI displays the recent page and shows history if a user wants to see old messages.
- Tests are required starting with point 6.

## Solution

Because of client side condition, an approach with a socket is not suitable. I think there are 2 ways to make the live updating:

- The first concept is to save messages in localStorage and generate a timer with a relatively short interval, such as 50 milliseconds. Periodically, the timer changes the user interface according to localStorage. This timer would function, but the browser's performance would suffer if there were too many tabs.
- The second suggestion is to store messages in localStorage and use the focus event while switching between tabs. A function is triggered at this time to update the UI based on localStorage.

=> I make this application following the second one.
