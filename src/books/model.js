// DataTypes is a class created that comes from the sequelize folder in node_module
const { DataTypes} = require ("sequelize");

// import the connection function that eztablishes a connection between the schema and the database
const connection = require ("../database/connection");

// create class Book that creates a table that is called "Book" with title, author and genre and all their properties specified
// define is a method on the class Sequelize
const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
});
// export the class Book
module.exports = Book;