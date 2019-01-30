export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING"


//return type
const signUpSucess = () => ({
    type: SIGNUP_SUCCESS
})

const singUpFailed = (error) => ({
    type: SIGNUP_FAILED,
    error: error
})

const logInSuccess = (userInfo) => ({
    type: LOGIN_SUCCESS,
    userId: userInfo.userId,
    userName: userInfo.userName

})

const logInFailed = (error) => ({
    type: LOGIN_FAILED,
    error: error
})

const logoutSuccess = () => {
	return {
		type:LOGOUT_SUCCESS
	}
}

const logoutFailed = (error) => {
	return {
		type:LOGOUT_FAILED,
		error:error
	}
} 

const logInLoading = () => ({
    type: LOGIN_LOADING
})

export const signUp = (item, goToLoginPage) => {
    console.log("signup action request")
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }
        
        dispatch(logInLoading())

        fetch("/signUp", postObject).then( response => {
            if(response.ok){
                response.json().then( (resData) => {
                    dispatch(signUpSucess())
                    alert("You are successfully signed up !")
                    goToLoginPage()
                }).catch( error => {
                    dispatch(singUpFailed("response.json() not ok with "+ error))
                })
            }else{
                dispatch(singUpFailed("response not ok "))
                alert("email already in use")
            }
        }).catch( error => {
            dispatch(singUpFailed("Server not ok with" + error))
        })
    }
}

export const logIn = (item, goToHome)=> {
    console.log("login action request")
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }

        dispatch(logInLoading());

        fetch("/logIn", postObject).then( response => {
            if(response.ok){ 
                response.json().then( resData => {
                    dispatch(logInSuccess(resData))
                    goToHome() 
                }).catch( error =>{
                    dispatch(logInFailed("response.json() not ok with "+ error))
                    alert("Login Failed")   
                })
            }else{
                dispatch(logInFailed("response not ok "))
                alert("Login Failed")
            }
        }).catch( error => {
            dispatch(logInFailed("Server not ok with" + error))
            alert("Login Failed")
        })
    }
}

export const logout = ( goToHome) => {
	return dispatch => {  
	  let logoutObject = {
		  method:"POST",
		  mode:"cors",
		  credentials:"include",
		  headers:{"Content-Type":"application/json"}
		  }	
      
        dispatch(logInLoading());
      
        fetch("/logout", logoutObject).then((response) => {
		    if(response.ok) {
                goToHome();
                dispatch(logoutSuccess());
               
		  } else {
			    dispatch(logoutFailed("Server responded with status:"+response.status));
		  }
	  }).catch((error) => {
		  dispatch(logoutFailed("Server responded with error"));
	  })
  }
}