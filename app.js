const express = require('express');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authRoute = require('./src/routes/authRoute');
const objectPatchRoute = require('./src/routes/objectPatchRoute');
const resizeImageRoute = require('./src/routes/resizeImageRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(hpp()); // Express middleware to protect against HTTP Parameter Pollution attacks.
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// This returns a response for the default route to avoid 'Not Found' Error
app.get('/', (req, res) => {
  res.status(200).json({
    success: 'YAY! Congratulations! Your Are Connected To Our Api. But, You Must Be Authorized To Continue!!!'
  });
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', authRoute);
app.use('/api/apply-patch', objectPatchRoute);
app.use('/api/resize-image', resizeImageRoute);

// This returns a response for any other route entered but not defined here (404)
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Welcome To Our Api. Please Ensure You Entered A Correct Route!!!'
  });
});

module.exports = app;
