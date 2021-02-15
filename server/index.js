const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//cors
app.use(cors());
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname+"/Publichtml"));
//routes use
const user = require("./routes/api/user");
const api = require("./routes/api/api");


app.use("/api", api);
app.use("/api/user", user);


mongoose.connect("mongodb://localhost/sportsEventDb").then(
	() => {console.log("Connection to mongoDB successful")},
	(error) => {console.log("Connection to mongoDB failed:"+error)}
);
/*
//database connection
let mongourl = 'mongodb+srv://shoppinglist:shoppingpassword@cluster0-9li3p.mongodb.net/test?retryWrites=true'

mongoose.connect(mongourl, {dbName:"shoppinglist", useNewUrlParser: true }).then(
    () => {console.log("Connection to mongoDB successful")},
    (error) => {console.log("Connection to mongoDB failed:"+error)}
);
*/

//server port
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`listening to port ${port}`);
});