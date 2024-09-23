const express = require('express');
const serverless = require("serverless-http");
const PORT =  3000;
const app = express();
const path = require('path');
app.set('view engine', 'ejs');


app.use(express.static('./src'))


app.get('/', (req, res) => {
    res.render('index')
  })

  app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

// Use the router to handle requests to the `/.netlify/functions/api` path
// app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);