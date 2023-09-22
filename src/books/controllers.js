//import the book author and genre models
const Book = require("./model");
const Genre = require("../genres/model");
const Author = require("../authors/model");

//adding a book
const addBook = async (req, res) => {
  console.log(req.body);
  try {
    let genre = await Genre.findOne({ where: { genre: req.body.genre } });
    if (!genre) {
      genre = await Genre.create({
        genre: req.body.genre,
      });
    }
    console.log("genre:", genre);
    let author = await Author.findOne({ where: { name: req.body.author } });
    if (!author) {
      author = await Author.create({
        name: req.body.author,
      });
    }
    console.log("author:", author);
    const book = await Book.create({
      title: req.body.title,
      AuthorId: author.id,
      GenreId: genre.id,
    });
    res.status(201).json({
      book: book,
      message: "Book has been created!",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};

//listing all books
const listAllBooks = async (req, res) => {
  try {
    const listAllBooks = await Book.findAll({});
    res.status(200).json({
      message: "Books have been located!",
      books: listAllBooks,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};

//list book by its title
const findBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.body.title } });

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book was not found. Please try another title.",
        title: req.body.title,
      });
    } else {
      res.status(200).json({
        message: "Book successfully located!",
        book: book,
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

//delete a book by its title
const deleteBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.body.title } });
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book was not found. Please try a different title.",
        title: req.body.title,
      });
    } else {
      await book.destroy();
      res.status(200).json({
        message: "Book has been successfully deleted!",
        book: book,
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

//updating an author by title of book
const updateAuthorByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.body.title } });
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book has not been found. Please try another title.",
        title: req.body.title,
      });
    } else {
      let author = await Author.findOne({where: {name: req.body.author}});
      if (!author) {
        author = await Author.create({
          name: req.body.author
        });
      };
      author = author.id;
      book.update({
        AuthorId: author,
      });
      await book.save();
      res.status(200).json({
        message: "Author has been successfully updated!",
        book: book,
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

//updating book by its title
const updateBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.body.title } });
    let author = book.AuthorId;
    let genre = book.genreId;
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
        title: req.body.title,
      });
    } else {
      if (req.body.newauthor !== undefined) {
        author = await Author.findOne({ where: { name: req.body.newauthor } });
        if (!author) {
          author = await Author.create({
            name: req.body.newauthor,
          });
        }
        author = author.id;
      }
      if (req.body.newgenre !== undefined) {
        genre = await Genre.findOne({ where: { genre: req.body.newgenre } });
        
        //if the genre selected doesnt exist create a new one
        if (!genre) {
          genre = await Genre.create({
            genre: req.body.newgenre,
          });
        }
        genre = genre.id;
      }
      // update book
      await book.update({
        title: req.body.newtitle,
        AuthorId: author,
        GenreId: genre,
      });
      // save the updated book to db
      await book.save();
      res.status(200).json({
        message: "Book has been successfully updated!",
        book: book,
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

//list all books by a specific author via their name
const getBooksByAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({ where: { name: req.body.author } });
    if (!author) {
      res.status(404).json({
        success: false,
        message: "Author has not been found. Please try another author name.",
        author: req.body.author,
      });
    } else {
      const listAllBooks = await Book.findAll({ where: { AuthorId: author.id } });
      res.status(200).json({
        message: "Author located successfully!",
        books: listAllBooks,
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

//deleting all books from db
const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({ where: {} });
    res.status(200).json({
      message: "All books have been successfully deleted from database!",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "An Error has occurred",
      error: error,
    });
  }
};

//export all the controllers
module.exports = {
  addBook,
  listAllBooks,
  findBookByTitle,
  deleteBookByTitle,
  updateAuthorByTitle,
  updateBookByTitle,
  getBooksByAuthor,
  deleteAllBooks
};