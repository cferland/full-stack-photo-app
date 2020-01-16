const express = require('express');
const PORT = process.env.PORT || 3001;
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');

const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/auth', userRouter);
app.use('/posts', postRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message);
  });

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });