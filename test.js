var express = require('express');
var app = express();
var config = require('tnl-config');
var io = require('./index');

app.use('/', io);

app.listen(config.api.bindPort, function() {
  console.log(config.logo.join('\n'));
  console.log('Histograph IO listening at port ' + config.api.bindPort);
});
