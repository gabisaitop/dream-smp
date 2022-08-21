const Pool = require('pg').Pool

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'dbdreamsmp',
    password:'dnf3672',
    port:6969,
})

module.exports = pool