//similar process as the book model but this one only contains the genre to allow us to create a one to many relationship with Book.
const {DataTypes} = require("sequelize");
const connection = require("../db/connection");

// this is a class that will entail genre details and their properties
const Genre = connection.define("Genre", {
    genre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
});
// export class Genre
module.exports = Genre;