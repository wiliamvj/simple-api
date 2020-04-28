const mongoose = require('mongoose');

mongoose.connect('url mongo db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
