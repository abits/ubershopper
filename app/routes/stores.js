var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Store = require('../models/store');

/* GET store resource */
router.get('/:id', function(request, response) {
  var store_id = request.params.id;
  response.send(store_id);
});

router.post('/', function(request, response) {
  var store = Store();
  console.log(request.body);
  _.merge(store, request.body);
  store.save(function(err) {
    if (err) {
      response.send(err);
    }
    response.status(201).json({'_id': store._id});
  })
});

module.exports = router;
