require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));

const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT
  || 'http://localhost:3000/graphql';
const UI_AUTH_ENDPOINT = process.env.UI_AUTH_ENDPOINT
  || 'http://localhost:3000/auth';
const env = { UI_API_ENDPOINT, UI_AUTH_ENDPOINT };

app.get('/env.js', (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

const port = process.env.UI_SERVER_ENDPOINT || 8000;

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});
