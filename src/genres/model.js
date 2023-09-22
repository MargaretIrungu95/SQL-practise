//similar process as the book model but this one only contains the genre to allow us to create a one to many relationship with Book.
const {DataTypes} = require("sequelize");
const connection = require("../db/connection");

const Genre = connection.define("Genre", {
    genre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
});
// export Genre
module.exports = Genre;