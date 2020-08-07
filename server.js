var express = require('express');
var app = express();
var path = require('path');
var folder= process.argv[2] || "./"
app.use(express.static(folder)) 

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + req.url + '/index.html'));
});

app.get('/global-this', function(req, res) {
    console.log(window);
    console.log(self);
    console.log(globalThis);
})

app.listen(2020);