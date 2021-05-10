require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const { logger } = require('./config/logger');
const { configureDatabase } = require('./config/databaseConfig');
const apiRoutes = require('./api/v1/routes/api');

// Setting content type as json
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Setting middleware for secure http headers
app.use(helmet());

// Setting middleware to compress body of the requests
app.use(compression());

// configuring database
configureDatabase();

// Setting routes
app.use('/bhoot/api/v1', apiRoutes);

// starting express server
app.listen(process.env.PORT || 3000, async () => {
    logger.info('Server started.');
});
