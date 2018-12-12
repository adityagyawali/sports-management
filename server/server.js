const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using routes
const routes = require("./routes/api/user");
app.use("/api/user", routes);

//database connection
const db =
	"mongodb+srv://aditya:sports@sports-management-1cphu.mongodb.net/test?retryWrites=true";
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log(`MongoDB connected`))
	.catch(err => console.log(err));
const port = 8000;

app.listen(port, () => console.log(`server is running in port ${port}`));
