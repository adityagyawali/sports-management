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

//routes use
const user = require("./routes/api/user");

app.use("/api/user", user);

//database connection
mongoose.connect(
	`
mongodb://aditya:abcd1234@ds159121.mlab.com:59121/sports-finder
`,
	{ useNewUrlParser: true },
	() => {
		console.log("connected to database");
	}
);

//server port
const port = 5000;
app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
