const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//User Model
const User = require("../../models/User");

//testing routes
router.get("/test", (req, res) => {
	res.send("test works");
});

//registering a user
// router.post("/register", (req, res) => {
// 	const newUser = new User({
// 		email: req.body.email,
// 		password: req.body.password
// 	});
// 	//creating hash password
// 	bcrypt.getSalt(10, (err, salt) => {
// 		bcrypt.hash(newUser.password, salt, (err, hash) => {
// 			// if (err) throw err;
// 			newUser.password = hash;
// 			newUser
// 				.save()
// 				.then(user => res.json(user))
// 				.catch(() => console.log(`error from here`));
// 		});
// 	});
// });

router.post("/register", (req, res) => {
	console.log(req.body.email)
	console.log(req.body.password)
	const newUser = new User({
		email: req.body.email,
		password: req.body.password
	});
	//creating hash password
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			// if (err) throw err;
			newUser.password = hash;
			newUser
				.save()
				.then(user => res.json(user))
				.catch((err) => console.log(err));
		});
	});
});
//user login
router.post("/login", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({
		email
	}).then(user => {
		if (!user) {
			res.status(201).json({
				msg: "User not found"
			});
		}
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				//todo give a token
				const payload = {
					id: user.id,
					email: user.email
				};
				jwt.sign(
					payload,
					"secretOrPrivateKey", {
						expiresIn: 3600
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				res.status(201).json({
					msg: `Password doesn't match`
				});
			}
		});
	});
});

module.exports = router;