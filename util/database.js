const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'beyond_dance',
    password: ''
})

module.exports = pool.promise()