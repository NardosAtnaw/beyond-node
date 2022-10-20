const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_NAME : process.env.DB_NAME,
    DB_PASSWORD : process.env.DB_PASSWORD 
}