// NB - its important the order you list them as this will be read from top to bottom.

// Import .env file with the url and port 
require ("dotenv").config();

// this is a function that grabs the main express module from within  node_modules
const express = require ("express");

// to access the port which is in the .env file
const port = process.env.PORT || 5001;

// the app variable allows us to run the express module within node_modules 
const app = express();
app.use(express.json()); //allows you to use the content in the express lib.


// creates a listener for the port
app.listen(port, () => {
    // syncTables()
    console.log(`Server is listening on port ${port}`)
});




