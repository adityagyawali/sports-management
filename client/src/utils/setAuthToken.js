import axios from "axios";

export const setAuthToken = token => {
	if (token) {
		//sending token to every request
		axios.defaults.headers.common["Authorization"] = token;
	} else {
		//delete token when the user logs out
		delete axios.defaults.headers.common["Authorization"];
	}
};
