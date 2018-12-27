import axios from "axios";
import jwtDecode from "jwt-decode";
import { CURRENT_USER } from "./actionTypes";

import { setAuthToken } from "../utils/setAuthToken";

//register user

export const register = (newUser, history) => dispatch => {
	axios
		.post("http://localhost:5000/api/user/register", newUser)
		.then(res => history.push("/login"))
		.catch(() => console.log({ msg: "something went wrong while signup" }));
};

//login in user
export const login = newUser => dispatch => {
	axios
		.post("http://localhost:5000/api/user/login", newUser)
		.then(res => {
			//get the token
			const { token } = res.data;
			//save it in localstorage
			localStorage.setItem("jwt", token);
			//set the token to auth header (like in postman)
			setAuthToken(token);
			//we decode the information form token
			const decoded = jwtDecode(token);
			console.log("decoded", decoded);
			//dispatch the current user
			dispatch(currentUser(decoded));
		})
		.catch(() => console.log({ msg: "something went wrong while login" }));
};

export const currentUser = decoded => {
	return {
		type: CURRENT_USER,
		payload: decoded
	};
};

export const logOut = () => dispatch => {
	//remove jwt token from localstorage
	localStorage.removeItem("jwt");
	//remove header from ['Authorization']
	setAuthToken(false);
	//dispatch current user with empty object so the isAuthenticated will be false
	dispatch(currentUser({}));
};
