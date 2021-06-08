const mongoose = require('mongoose');
const { logger } = require('./logger');
const { loadSettings } = require('../api/v1/services/settingsService');

const configureDatabase = async () => {
    try {
        let mongoUrl;
        if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
            mongoUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/BhootBlog`;
        } else {
            mongoUrl = `mongodb://${process.env.DB_URL}:${process.env.db_port}/BhootBlog`;
        }
        await mongoose.connect(mongoUrl,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            });
        loadSettings();
        logger.info('Connected to database successfully.');
    } catch (error) {
        logger.error(error);
    }
};

module.exports = { configureDatabase };
