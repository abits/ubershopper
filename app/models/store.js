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
    type: String,
    coordinates: [Number]
  }
});

StoreSchema.index({loc: '2dsphere'});

mongoose.model('Store', StoreSchema);
