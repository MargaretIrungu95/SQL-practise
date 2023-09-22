// import the router method from express folder in node_modules
const {Router} = require ("express");
//bookRouter is a function that contains all the Router methods contained in it
const bookRouter = Router();

// import controllers to give the routes functionality
const {addBook, listAllBooks, findBookByTitle, deleteBookByTitle, updateAuthorByTitle, updateBookByTitle} = require("./controllers");

// route to request to add a book to database 
bookRouter.post("/addBook", addBook)

// route to request to list all the books in database 
bookRouter.get("/listAllBooks", listAllBooks);

// route to send request to find a specific book using its title 
// bookRouter.get("/findBookByTitle", findBookByTitle);

// route to request to delete a specific book by its title  
bookRouter.delete("/deleteBookByTitle", deleteBookByTitle);

// route to request to update author by title of book
// bookRouter.put("/updateAuthorByTitle", updateAuthorByTitle);

// route to send request to update author/genre by title of book
bookRouter.put("/updateBookByTitle", updateBookByTitle);



//  export the bookRouter function
module.exports = bookRouter;