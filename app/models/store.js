var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Store Schema
 * @type {Schema}
 */
var StoreSchema = new Schema({
  name:  String,
  description:  String,
  loc :  {
    type: {type: String},
    coordinates: [Number]
  }
});

StoreSchema.index({loc: '2dsphere'});

var Store = mongoose.model('Store', StoreSchema);
module.exports = Store;
