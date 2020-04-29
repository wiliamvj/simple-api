const mongoose = require('mongoose');

mongoose.connect('URL mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
