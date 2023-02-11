/* Include the server configuration file */
require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to database");
module.exports = connection;
