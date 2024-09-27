const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");



router.get("/test", (req, res) => {
	res.send("test works");
});

//register user

router.post("/register", (req, res) => {
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			res.json({ msg: "User already exists" });
		}
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});
		//creating a hash password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser
					.save()
					.then(user => res.json(user))
					.catch(err => console.log(err));
			});
		});
	});
});

//login user

router.post("/login", (req, res) => {
	const email = req.body.email;
	User.findOne({ email }).then(user => {
		if (!user) {
			res.json({ msg: "User not found" });
		}
		bcrypt.compare(req.body.password, user.password).then(isMatch => {
			if (isMatch) {
				const payload = {
					name: user.name,
					email: user.email
				};
				console.log(payload);
				jwt.sign(
					payload,
					"secretOrPrivateKey",
					{ expiresIn: 3600 },
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				res.json({ msg: `Password didn't match` });
			}
		});
	});
});



module.exports = router;
