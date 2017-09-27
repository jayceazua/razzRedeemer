const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB'),
    prizeRoutes = require('./expressRoutes/prizeRoutes');


mongoose.connect(process.env.MONGODB_URI || config.DB, {
    useMongoClient: true
});

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/prizes', prizeRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});