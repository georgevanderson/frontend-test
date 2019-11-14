# Frontend Interview

## Installation

```sh
yarn install
yarn dev
```

1. when a user clicks on the button, ping api `https://randomuser.me/api/`

2. use the response data to create a row item that displays the user's avatar and info

| --------------------------------------------------------------------- |
| ( avatar ) {{firstName}} {{lastName}}              {{isRegistered?}}  |
| --------------------------------------------------------------------- |

3. add a box aligned to right of header that holds tally of number of users in list

4. pull 100 users and fill the list with 10 at random

5. asynchronously fill the list with 50 users using parallel requests
