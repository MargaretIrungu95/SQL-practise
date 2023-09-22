//similar to genre and books look at their models for reference
const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

// this is a class that will entail author details and their properties
const Author = connection.define("Author", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
});
// export class Author
module.exports = Author;