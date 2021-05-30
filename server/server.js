const dotenv = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors =require('cors');
app.use(cors());

//config dotenv
dotenv.config({path : './config/config.env'});

//config express to receive the form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));


const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (request, response) => {
    response.send(`<h2>Welcome to Express Server REST API</h2>`);
});

//connect to mongo db database
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useCreateIndex : true
}).then((response) => {
console.log(`Connected to MongoDb successfully....`)
}).catch((err) => {
console.log(err);
process.exit(1); //stop the node js process if unable to connect to mongodb
});

//Configure Router
app.use('./api', require('./router/apiRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server Started at http://${hostname}:${port}`);
});