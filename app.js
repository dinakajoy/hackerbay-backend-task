const express = require('express');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const authRoute = require('./routes/authRoute');
const objectPatchRoute = require('./routes/objectPatchRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(hpp());
app.use(helmet());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: 'YAY! Congratulations! Your Are Connected To Our Api. But, You Must Be Authorized To Continue!!!'
  });
});

app.use('/api/auth', authRoute);
app.use('/api/apply-patch', objectPatchRoute);

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Welcome To Our Api. Please Ensure You Entered A Correct Route!!!'
  });
});

module.exports = app;