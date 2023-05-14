const express = require('express');
const app = express();

// todo - try this to see what happens 
// playing with server block logic - try this
// const PORT = process.env.PORT || 3001 || 80
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('hello world, here come the streamingturtles - finally with 2vaapom');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
