//similar to creating book routes look in books/routes to see notation
const {Router} = require("express");
const genreRouter = Router();
const {addGenre, deleteGenre, getAllGenres, getGenre} = require("./controllers");

//add genre
genreRouter.post("/addGenre", addGenre);

//delete genre
genreRouter.delete("deleteGenre", deleteGenre);

//list all genres
genreRouter.get("/getallGenres", getAllGenres);

//get one genre and books within said genre
genreRouter.get("/getGenre", getGenre);


// export all routes
module.exports = genreRouter;