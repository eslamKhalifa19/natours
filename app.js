const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(404).json({ message: 'Hello from the server', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint');
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
