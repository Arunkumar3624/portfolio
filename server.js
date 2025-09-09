const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const data = require('./data.json');

app.get('/api/about', (req, res) => {
  res.json(data.about);
});

app.get('/api/projects', (req, res) => {
  res.json(data.projects);
});

// NEW: Return everything
app.get('/api/all', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
