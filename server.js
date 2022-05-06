// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
// todo                                        


// Handles http requests (express is node js framework)
const express = require('express');
const app = express();


// Handles the handlebars
const hbs = require("hbs");


// This part runs most pieces of middleware
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/' )


// Local Variables 
// todo           


// 👇 Start handling routes here
app.get('/', (req, res) => {
  res.render("home.hbs")
})

app.get('/about', (req, res) => {
  res.render("about.hbs")
})

app.get('/my-hobbies', (req, res) => {
  res.render("my-hobbies.hbs")
})


// To handle errors.
// todo            


// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});