var closure = require('../');
var fs = require('fs');

fs.readFile('../lib/cibot-closure-compiler.js', 'utf8', function(err, data) {

   closure.compile(data.toString(), function(err, data) {
      console.log(data);
   });
});

