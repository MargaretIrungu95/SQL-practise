//import book, genre and author models
const Genre = require("./model");
const Book = require("../books/model");
const Author = require("../authors/model");

// add genre
const addGenre = async (req, res) => {
  try {
    console.log(req.body);
    const genre = await Genre.create({
      genre: req.body.genre,
    });
    res.status(201).json({
      genre: genre,
      message: "Genre has added",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "Error has occurred",
      error: error,
    });
  }
};

// delete genre
const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findOne({ where: { genre: req.body.genre } });
    if (!genre) {
      res.status(404).json({
        success: false,
        message: "The genre you are looking for has not been found. Please try another genre.",
        genre: req.body.genre,
      });
    } else {
      await genre.destroy();
      res.status(200).json({
        message: "The genre selected has been deleted!",
        genre: genre,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "Error has occurred",
      error: error,
    });
  }
};

// list all genres
const getAllGenres = async (req, res) => {
  try {
    const getAllGenres = await Genre.findAll({});
    res.status(200).json({
      message: "Genres found successfully",
      genres: getAllGenres,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "Error has occurred",
      error: error,
    });
  }
};

//list one genre and books related to the genre
const getGenre = async (req, res) => {
  try {
    const getGenre = await Genre.findOne({ where: { genre: req.body.genre } });
    if (!getGenre) {
      res.status(404).json({
        success: false,
        message: "Genre not found. Please try another genre.",
        genre: req.body.genre,
      });
    } else {
      const getBooks = await Book.findAll({ where: { GenreId: getGenre.id } });
      res.status(200).json({
        message: "Genre has been located!",
        genre: getGenre,
        books: getBooks,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "Error has occurred",
      error: error,
    });
  }
};

// export all the connections
module.exports = {
  addGenre,
  deleteGenre,
  getAllGenres,
  getGenre
};