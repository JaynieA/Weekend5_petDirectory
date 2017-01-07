var mongoose = require('mongoose');
var connString = '';

if(process.env.DATABASE_URL !== undefined) {
    console.log('env connection string');
    connString = process.env.DATABASE_URL;
    pg.defaults.ssl = true;
} else {
    connString = 'mongodb://localhost:27017/petDirectory';
}

console.log("connectionString set to: ", connString);

module.exports = connString;
