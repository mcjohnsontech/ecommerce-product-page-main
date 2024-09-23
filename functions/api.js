const express = require('express');
// ejs = require('express-handlebars');
const serverless = require("serverless-http");
// const PORT =  3000;
const app = express();
const path = require('path');
const router = express.Router();
app.set('views', path.join(__dirname +  '/../views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
// app.use(express.static('../../../src'))
app.use(express.static(__dirname + '/../src'));

router.get('/', (req, res) => {
    res.render('index')
    console.log(__dirname);
  })

  // app.listen(PORT, function (err) {
    // if (err) console.log(err);
    // console.log("Server listening on PORT", PORT);
// });

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);