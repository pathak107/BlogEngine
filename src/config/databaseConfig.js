const mongoose = require('mongoose');
const { logger } = require('./logger');
const config = require('../../config.json');

const configureDatabase = async () => {
    try {
        let mongoUrl;
        if (config.database.dbUsername !== null && config.database.dbPassword !== null) {
            mongoUrl = `mongodb://${config.database.dbUsername}:${config.database.dbPassword}@${config.database.dbUrl}:${config.database.dbPort}/BhootBlog`;
        } else {
            mongoUrl = `mongodb://${config.database.dbUrl}:${config.database.dbPort}/BhootBlog`;
        }
        await mongoose.connect(mongoUrl,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            });
        logger.info('Connected to database successfully.');
    } catch (error) {
        logger.error(error);
    }
};

module.exports = { configureDatabase };
