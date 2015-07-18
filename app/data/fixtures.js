// fixtures
var fixtureStore = new Store({
  name : 'store_1',
  description: 'even more description'
});

fixtureStore.save(function(err) {
  console.log(err);
})
