var $ = require('../static/vendor/jquery-2.2.3.min');
var greeting = require('babel!./greeting').default;

$('#app').text(greeting);
