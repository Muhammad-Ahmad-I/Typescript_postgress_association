'use strict';
exports.__esModule = true;
var express_1 = require('express');
var cors = require('cors');

var bodyParser = require('body-parser');
var app = (0, express_1['default'])();
app.listen(3000, function () {
  console.log('server is running on port 3000');
});
