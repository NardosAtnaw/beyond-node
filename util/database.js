const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'beyond-dance',
    password: ''
})

module.exports = pool.promise()