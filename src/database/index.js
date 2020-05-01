const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin:admin@omnistack09-4n2qz.mongodb.net/omnistack9?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
