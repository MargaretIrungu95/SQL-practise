//similar method as for genres
const {Router} = require("express");
const authorRouter = Router();
const {addAuthor, listAllAuthors, deleteAuthor, getAuthor, getAuthorParamName} = require("./controllers");

// add an author
authorRouter.post("/addauthor", addAuthor);

// get all authors
authorRouter.get("/listallauthors", listAllAuthors);

// delete author
authorRouter.delete("/deleteauthor", deleteAuthor);

// find author and books by said author
authorRouter.get("/getauthor", getAuthor);

// find all books and genres of author
authorRouter.get("/getauthor/:name", getAuthorParamName);

// export author routes
module.exports = authorRouter;