// Sequelize is a class created that comes from the sequelize folder in node_module
const { Sequelize } = require ("sequelize");

//establish a connection to my database which is in the .env file
const connection = new Sequelize(process.env.MYSQL_URI);

//authenticate is a method within the class Sequelize
connection.authenticate();

//Notify that database connection has been made
console.log("Your Database connection is working!");

// export the connection function
module.exports = connection;
