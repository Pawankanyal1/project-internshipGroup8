const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Pawankanyal1:6Ntt9WQRMlMCVLPc@cluster0.g2udp.mongodb.net/group8Database-DB", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/functionup', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
