require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const { logger } = require('./config/logger');
const { configureDatabase } = require('./config/databaseConfig');

// Setting secure http headers
app.use(helmet());
app.use(compression());

// configuring database
configureDatabase();

// starting express server
app.listen(process.env.PORT || 3000, async () => {
    logger.info('Server started.');
});
