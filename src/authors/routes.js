//similar method as for genres
const {Router} = require("express");
const authorRouter = Router();
const {addAuthor, listAllAuthors, deleteAuthor, getAuthor} = require("./controllers");

// add an author
authorRouter.post("/addauthor", addAuthor);

// get all authors
authorRouter.get("/listallauthors", listAllAuthors);

// delete author
authorRouter.delete("/deleteauthor", deleteAuthor);

// find author and books by said author
authorRouter.get("/getauthor", getAuthor);


// export author routes
module.exports = authorRouter;