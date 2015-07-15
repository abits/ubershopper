var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:id', function(request, response) {
  var store_id = request.params.id;
  response.send(store_id);
});

module.exports = router;
