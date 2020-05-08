const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.listen(3000);

app.get('/api/randomuser', async (req, res) => {
  const response = await fetch('https://randomuser.me/api/');
  const json = await response.json();
  res.send(json);
});

const staticDirPath = path.resolve(__dirname, '..', 'app');
const staticServer = express.static(staticDirPath);
app.use(staticServer);