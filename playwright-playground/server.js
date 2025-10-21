var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`App started: http://localhost:${PORT}`);