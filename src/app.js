require('dotenv').config();
const express = require('express');
const app = express();
const { logger } = require('./config/logger');
const { configureDatabase } = require('./config/databaseConfig');

// configuring database
configureDatabase();

// starting express server
app.listen(process.env.PORT || 3000, async () => {
    logger.info('Server started.');
});
