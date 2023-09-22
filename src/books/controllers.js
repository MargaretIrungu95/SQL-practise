//import Book, genre and author models
const Book = require("./model");
const Genre = require("../genres/model");
const Author = require("../authors/model");

//adding a book to database
const addBook = async (req, res) => {
    try {
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        })
        res.status(201).json({book: book, message: "Book has been created!"})
    } catch (error) {
     res.status(500).json({error: error, errorMessage: error.message})   
    }
}


//listing all the books in database
const listAllBooks = async (req, res) => {
    const books = await Book.findAll();
    const successResponse = {
      books: books,
      message: "books found",
    };
  
    res.status(200).json(successResponse);
};

// updating a book author by its title
const updateBookByTitle = async (req, res) => {
    const updatedBook = await Book.update(
      { author: req.body.newAuthor },
      { where: { title: req.body.title } }
    );
  
    const successResponse = {
      updatedBook: updatedBook,
      message: `${req.body.title} updated`,
    };
  
    res.status(201).json(successResponse);
}

//deleting a book by its title
const deleteBookByTitle = async (req, res) => {
    const deletedBook = await Book.destroy({ where: { title: req.body.title } });
  
    if (deletedBook) {
      const successResponse = {
        deletedBook: deletedBook,
        message: `${req.body.title} deleted`,
      };
  
      res.status(202).json(successResponse);
      return;
    }
  
    const noEntryResponse = {
      deletedBook: deletedBook,
      message: `${req.body.title} was not found and so not deleted`,
    };
  
    res.status(202).json(noEntryResponse);
  };
module.exports = {
    addBook,
    listAllBooks,
    deleteBookByTitle,
    updateBookByTitle
};

