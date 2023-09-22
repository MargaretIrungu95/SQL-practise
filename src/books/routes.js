// import the router method from express folder in node_modules
const {Router} = require ("express");
//bookRouter is a function that contains all the Router methods contained in it
const bookRouter = Router();

// import controllers to give the routes functionality
const {
  addBook,
  listAllBooks,
  findBookByTitle,
  deleteBookByTitle,
  updateAuthorByTitle,
  updateBookByTitle,
  getBooksByAuthor,
  deleteAllBooks
} = require("./controllers");

// route to request to add a book to database
bookRouter.post("/addbook", addBook);

// route to request to list all the books in database 
bookRouter.get("/listallbooks", listAllBooks);

// route to send request to find a specific book using its title
bookRouter.get("/findbookbytitle", findBookByTitle);

// route to request to delete a specific book by its title
bookRouter.delete("/deletebookbytitle", deleteBookByTitle);

// route to request to update author by title of book
bookRouter.put("/updateauthorbytitle", updateAuthorByTitle);

// route to send request to update author/genre by title of book
bookRouter.put("/updatebookbytitle", updateBookByTitle);

// route to send request to get all books from an author
bookRouter.get("/getbooksbyauthor", getBooksByAuthor);

// route to send request to delete all books
bookRouter.delete("/deleteallbooks", deleteAllBooks);


//  export the book routers
module.exports = bookRouter;