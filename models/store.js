var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/ubershopper');

var StoreSchema = new Schema({
  name:  String,
  description:  String,
  loc :  {
    type: String,
    coordinates: [Number]
  }
});

StoreSchema.index({loc: '2dsphere'});

var Store = mongoose.model('Store', StoreSchema);

// fixtures
store_1 = new Store({
  name : 'store_1'
});

store_1.save(function(err) {
  console.log(err);
})
mongoose.disconnect();