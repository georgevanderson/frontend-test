# Frontend Interview

## Installation

```sh
git clone git@github.com:aricallen/frontend-test.git
cd frontend-test
yarn install
yarn dev
```

## Instructions

> All code should be written without editing index.html

1. when a user clicks on the button, ping api `https://randomuser.me/api/`

2. use the response data to create a row item that displays the user's avatar and info

```
| --------------------------------------------------------------------- |
| ( avatar ) {{firstName}} {{lastName}}                                 |
| --------------------------------------------------------------------- |
```

3. pull 50 users in parallel to populate list

4. pull 50 users in batches of 10 and populate list incrementally