const express = require('express');
const PORT =  3000;
const app = express();
const path = require('path');
app.set('view engine', 'ejs');


app.use(express.static('partials'))


app.get('/', (req, res) => {
    res.render('index')
  })

  app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});