const mysql = require('mysql2')
const config =  require('../config.js');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'beyond-dance',
//     password: ''
// })

const pool = mysql.createPool({
    host: 'localhost',
    user: config.DB_USER,
    database: config.DB_NAME,
    password: config.DB_PASSWORD
})

module.exports = pool.promise()