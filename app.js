const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');
const { error404 } = require('./errors/errorText');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '5fda5183e8f27d1c5c7a7635',
  };

  next();
});

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use('*', (req, res) => res.status(404).send(error404));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
