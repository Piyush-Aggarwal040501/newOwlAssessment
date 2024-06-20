const {Pool} = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'newowlusers',
    password:'piyush',
    port:5432
})

module.exports = pool;