require('dotenv').config();

const express = require('express');
const helloWordRoute = require('./routes/api');

const app = express();

app.use('/api/hello', helloWordRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
