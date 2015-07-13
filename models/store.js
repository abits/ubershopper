var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Store = new Schema({
  name:  String,
  description:  String,
  loc :  {
    type: String},
    coordinates: [Number]
  },
});

store.index({loc: '2dsphere'});

// fixtures

store_1 = new Store({
  name : 'store_1'
});

store_1.save(function(err) {
  console.log(err);
})