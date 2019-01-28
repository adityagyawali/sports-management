const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const signUp_LoginModel = require("./models/signUpModel"); //model
const needPlayerModel = require("./models/needPlayerModel");
const categoryModel = require("./models/categoryModel");
const regionModel = require("./models/regionModel");

const apiRouter = require("./routes/api/api");//routes use
const app = express();
 
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname+"/Publichtml"));


//mongodb connection
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


app.use(session({
    name:"sportSession-id",
    resave:false,
    secret:"myBestSecret",
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24},
	store: new MongoStore({
			collection:"session",
			mongooseConnection:mongoose.connection, //Heroku deploy
			ttl:24*60*60
	})
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	console.log("serializeUser:"+ user.username);
	done(null,user._id);
});

passport.deserializeUser(function(id,done) {
	console.log("deserializeUser");
	signUp_LoginModel.findById( id, function(err, user) {
		if(err) {
			return done(err);
		}
		if(!user) {
			return done(null,false);
		}
		
		return done(null,user);
	});	
});

passport.use("local-login", 
	new localStrategy({ //로컬 폼은 꼭 이 형태로 (username 과 password 필드는 바꾸지 않고, value 값만 바꿔라)
		usernameField:"email",
		passwordField:"password",
		passReqToCallback:true
	}, 
	function(req, username, password, done){
		if(!req.body.email || !req.body.password) { // 내가 보낸 폼은 req.body.email로 보냈기 때문에 
			return done(null,false,"Wrong credentials");
		}
		if(req.body.email.length === 0 || req.body.password.length ===0 ) {
			return done(null,false,"Wrong credentials");
		}
		
		signUp_LoginModel.findOne({"email":username}, function(err,user) {
			if(err){
				return done(err);
			}
			if(!user) {
				return done(null,false,"Wrong credentials");
			}
			if(isPasswordValid(password,user.password)) {
				let token = createToken();
				req.session.token = token;
				req.session.username= username;
				return done(null,user)
			}
	});
}));

function createSaltedPassword(pw) {
	return bcrypt.hashSync(pw,bcrypt.genSaltSync(8),null);
}

function isPasswordValid(pw,hash) {
	return bcrypt.compareSync(pw,hash);
}


app.post("/login", 
	passport.authenticate('local-login', { failureRedirect: '/login'}),
	function(req,res){
		console.log(req.session.username)
		return res.status(200).json({"userId": req.session.passport.user, "userName": req.session.username})
});

app.post("/logout", function(req,res) {
	if(req.session) {
		req.session.destroy();
	}
	return res.status(200).json({"message":"logged out"});
});


app.post("/signUp", function(req,res) {
	console.log("/signUp request")
	if(!req.body.email || !req.body.password) {
		return res.status(409).json({"message":"provide credentials"})
	}
	if(req.body.email.length === 0 || req.body.password.length === 0) {
		return res.status(409).json({"message":"provide credentials"})		
	}
	
	//check if the email is already existed
	signUp_LoginModel.findOne({"email": req.body.email}, function(err, user){
		if(err) {
			return res.status(409).json({"message":"signup failed with "+ err})
		}
		
		if( user === null ){   
			let userInfo = new signUp_LoginModel({
				"username": req.body.username,
				"password": createSaltedPassword(req.body.password),
				"email": req.body.email
			})
		
			userInfo.save(function(err) {
				if(err) {
					return res.status(409).json({"message":"signup failed with "+ err})
				}
				return res.status(200).json({"message":"success"})
			})
		}else {
			console.log("email already in use")
			return res.status(409).json({"message":"the email is already in use"})
		}
	})
});

function isUserLogged(req,res,next) {
	let token = req.headers.token;
	if(req.isAuthenticated()) {
		return next();
	}
	return res.status(403).json({"message":"not allowed"});
}

function createToken() {
	let token = "";
	let letters = "abcdefghijABCDEFGHIJ0123456789"
	for(let i=0;i<1024;i++) {
		let temp = Math.floor(Math.random()*30);
		token = token+letters[temp]
	}
	return token;
}

app.get("/getEventList", function(req, res){
    console.log('getEventList request arrived')
    needPlayerModel.find( function(err, items){
        if(err){
            return res.status(404).json({"message": "eventList not found"})
        }
        if(!items){
            return res.status(404).json({"message":"eventList not found"})
        }
        return res.status(200).json(items);
    }).sort({ "date": 1 } );
})

app.post("/getSportsCategory", function (req, res){
    console.log("getCateogry request");

    categoryModel.find( function(err, item){
        if(err){
            return res.status(404).json({"message": "error"})
        }
        if(!item){
            return res.status(404).json({"message":"item is not existed"})
        }
        return res.status(200).json(item)
    }).sort({"category": 1})
})

app.post("/getRegionCategory", function (req, res){
    console.log("getRegion request");

    regionModel.find( function(err, item){
        if(err){
            return res.status(404).json({"message": "error"})
        }
        if(!item){
            return res.status(404).json({"message":"item is not existed"})
        }
        
        return res.status(200).json(item)
    }).sort({"region": 1})
})

app.use("/api", isUserLogged, apiRouter);

//server port
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`listening to port ${port}`);
});