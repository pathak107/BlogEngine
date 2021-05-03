const mongoose = require('mongoose');
const { logger } = require('./logger');
const config = require('../../config.json');

const configureDatabase = async () => {
    try {
        let mongoUrl;
        if (config.database.db_username !== null && config.database.db_password !== null) {
            mongoUrl = `mongodb://${config.database.db_username}:${config.database.db_password}@${config.database.db_url}:${config.database.db_port}/BhootBlog`;
        } else {
            mongoUrl = `mongodb://${config.database.db_url}:${config.database.db_port}/BhootBlog`;
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
