require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const { logger } = require('./config/logger');
const { configureDatabase } = require('./config/databaseConfig');
const apiRoutes = require('./api/v1/routes/api');
// Setting middleware to compress static files and responses
// This middleware should always be before express.static
app.use(compression());

// Setting static middleware
app.use('/static', express.static(path.join(__dirname, './public'), { maxage: 31557600 }));

// Setting middleware for secure http headers
app.use(helmet());

// Setting content type as json
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// configuring database
configureDatabase();

// Setting routes
app.use('/bhoot/api/v1', apiRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({
    status: 'failure',
    message: 'invalid url',
}));

// starting express server
app.listen(process.env.PORT || 3000, async () => {
    logger.info('Server started.');
});
