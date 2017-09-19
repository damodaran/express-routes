const app = require('express')();
const bodyParser     = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/testDB',{
  useMongoClient:true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //Connected!
  console.log("we're connected!");
  //Connect all our routes to our application
  app.use('/', routes);
});

// Listen
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
