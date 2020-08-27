//index.js
//Import Express
let express = require('express')
//Import routes
let apiRoutes = require("./router")
//Start App
let app = express();
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');

//Assign port
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
//Use API routes in the App
app.use('/api', apiRoutes)
//connect to mongoose
const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})