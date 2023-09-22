//import book, author and genre models
const Author = require("./model");
const Book = require("../books/model");
const Genre = require("../genres/model");

//add author
const addAuthor = async (req, res) => {
  console.log(req.body);
  try {
    const author = await Author.create({
      name: req.body.name,
    });
    res.status(201).json({
      author: author,
      message: "Author has been added!",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};

//list all authors in db
const listAllAuthors = async (req, res) => {
  try {
    const listAllAuthors = await Author.findAll({});
    res.status(200).json({
      message: "Authors have been successfully located!",
      authors: listAllAuthors,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};

//delete an author by their name
const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({ where: { name: req.body.name } });
    if (!author) {
      res.status(404).json({
        success: false,
        message: "The selected author was not found",
        name: req.body.name,
      });
    } else {
      await author.destroy();
      res.status(200).json({
        message: "Author successfully deleted!",
        author: author,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};

// list all books by author who is found by author id
const getAuthor = async (req, res) => {
  try {
    const getAuthor = await Author.findOne({ where: { name: req.body.name } });
    if (!getAuthor) {
      res.status(404).json({
        success: false,
        message: "The author requested was not found",
        name: req.body.name,
      });
    } else {
      const getBooks = await Book.findAll({ where: { AuthorId: getAuthor.id } });
      res.status(200).json({
        message: "The author was found successfully!",
        author: getAuthor.name,
        books: getBooks,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};


// export all controllers
module.exports = {
  addAuthor,
  listAllAuthors,
  deleteAuthor,
  getAuthor
};