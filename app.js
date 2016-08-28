/**
 * To run with express:
 * Change "gulp browser-sync" for "nodemon app.js || node app.js" in package.json
 */

var express = require('express');
var app = express();

// Load static files setting directory container
app.use(express.static('app/'));

// Up express server on port 3000
app.listen(3000, function() {
	console.log('Express server listening on port 3000.');
});