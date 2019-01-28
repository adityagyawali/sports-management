import { SIGNUP_SUCCESS, 
    SIGNUP_FAILED, 
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
	LOGOUT_FAILED,
	LOGIN_LOADING
} from '../actions/signUp_LogInActions'

function getInitialState() {
	if(sessionStorage.getItem("isLogged")) {
		let tempIsLogged = false
		if(sessionStorage.getItem("isLogged") === "true") {
			tempIsLogged = true
		}

		let tempUserId = ""
		if(sessionStorage.getItem("userId")) {
			tempUserId = sessionStorage.getItem("userId")
		}

		let tempUserName = ""
		if(sessionStorage.getItem("userName")) {
			tempUserName = sessionStorage.getItem("userName")
		}

		let error="";
		if(sessionStorage.getItem("login_error")) {
			error = sessionStorage.getItem("login_error");
		}
		return {
			isLogged:tempIsLogged,
			userId: tempUserId,
			userName: tempUserName,
			loading:false,
			error: error
		}	
	} else {
		return {
			isLogged:false,
			userId: "",
			userName: "",
			loading:false,
			error: ""
		}
	}		
}

function saveToStorage(isLogged, error, userId, userName) {
	sessionStorage.setItem("isLogged",isLogged);
	sessionStorage.setItem("login_error", error);
	sessionStorage.setItem("userId", userId);
	sessionStorage.setItem("userName", userName);
}

let initialState = getInitialState();

const signup_LoginReducer = (state = initialState, action) => {
	console.log("signup_LoginReducer, action:"+ action.type)
	let tempState={};
	switch(action.type) {
		case LOGIN_LOADING: 
			tempState = {
				...state,
				loading:true,
				error:""
			}
			return tempState;
		
		case SIGNUP_SUCCESS:
			tempState = {
				...state,
				error:"",
				loading:false
			}
			saveToStorage(state.isLogged,"", "");
			return tempState;
		
		case SIGNUP_FAILED:
			tempState = {
				...state,
				error:action.error,
				loading:false
			}
			saveToStorage(state.isLogged,action.error, "");
			return tempState;
		
		case LOGIN_SUCCESS:
			tempState = {
				isLogged:true,
				error:"",
				loading:false,
				userId: action.userId,
				userName: action.userName
			}
			saveToStorage("true","", action.userId, action.userName);
			return tempState;
		case LOGIN_FAILED:
			tempState = {
				...state,
				error:action.error,
				loading:false
			}
			saveToStorage(state.isLogged,action.error, "");
			return tempState;
		case LOGOUT_SUCCESS:
			tempState = {
				isLogged:false,
				loading:false,
				error:""
			}
			sessionStorage.clear();
			return tempState;
		
		case LOGOUT_FAILED: 
			tempState = {
				...state,
				loading:false,
				error:action.error
			}
			saveToStorage(state.isLogged, action.error, "", "");
			return tempState;
		
		default:
			return state
	}
}

export default signup_LoginReducer;
