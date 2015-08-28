//Entry point for application

var config = require('./server/config/config');
var app  = require('./server/server');
var logger = require('./server/util/logger');

app.listen(3000);
console.log("Listening on port 3000");