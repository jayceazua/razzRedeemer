var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Prizes
var Prize = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image_url: {
    type: String
  },
  quantity: {
    type: Number
  }

},{
	collection: 'prizes'
});

module.exports = mongoose.model('Prize', Prize);
