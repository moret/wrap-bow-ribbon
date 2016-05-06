define(function (require) {
  var $ = require('../static/vendor/jquery-2.2.3.min');
  var greeting = require('./greeting');
  $('#app').text(greeting);
});
