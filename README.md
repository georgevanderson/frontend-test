# Frontend Interview

## Installation

```sh
git clone https://github.com/aricallen/frontend-test.git
cd frontend-test
yarn install
yarn dev
# app is served at http://localhost:3000
```

## Instructions

> All code should be written in /app/js/script.js

1. when a user clicks on the button, ping api `/api/randomuser`

2. use the response data to create a row item that displays the user's avatar and info

```
| --------------------------------------------------------------------- |
| ( avatar ) {{firstName}} {{lastName}}                                 |
| --------------------------------------------------------------------- |
```

3. pull 50 users in parallel to populate list

4. pull 50 users in batches of 10 and render 10 rows at a time