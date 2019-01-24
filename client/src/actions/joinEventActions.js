export const JOIN_EVENT_SUCCESS = "JOIN_EVENT_SUCCESS"
export const JOIN_EVENT_FAILED = "JOIN_EVENT_FAILED"
export const MODIFY_MESSAGE_SUCCESS = "MODIFY_MESSAGE_SUCCESS"
export const MODIFY_MESSAGE_FAILED = "MODIFY_MESSAGE_SUCCESS"
export const LOADING = "LOADING"

//action type

const joinEventSuccess = (item) => ({
    type: JOIN_EVENT_SUCCESS,
    item: item
})

const joinEvnetFailed = (error) => ({
    type: JOIN_EVENT_FAILED,
    error: error
})

const modifyMessageSucess = (item) => ({
    type: MODIFY_MESSAGE_SUCCESS,
    item: item
})

const modifyMessageFailed = (error) => ({
    type: MODIFY_MESSAGE_FAILED,
    error: error
})

const loading = () => ({
    type: LOADING
})

//function
export const addPlayersToEvent = (item) => {
    return dispatch => {
        let postObject = {
            method: "POST",
            mode:"cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }

        dispatch(loading());
       
        fetch("/api/joinEvent", postObject).then( (response) => {
            if(response.ok){
                response.json().then( (resData) => {
                    dispatch(joinEventSuccess(resData))
                }).catch( (error)=>{
                    dispatch(joinEvnetFailed("response.json() failed: "+error))
                })
            }else{
                dispatch(joinEvnetFailed("response not ok: "+ response.status))
            }
        }).catch( (error)=>{
            dispatch(joinEvnetFailed("server not ok: "+error))
        });
    }
}

export const modifyMessageOfJoinedPlayer = (item, isModifyModeOff) => {
    return dispatch => {
        let postObject = {
            method: "POST",
            mode:"cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }

        //dispatch(loading())

        fetch("api/modifyMessage", postObject).then( response => {
            if(response.ok){
                response.json().then( res => {
                    dispatch(modifyMessageSucess())
                    isModifyModeOff()
                }).catch( err => {
                    dispatch(modifyMessageFailed("response.json() is not ok with"+ err))
                })
            }else{
                dispatch(modifyMessageFailed("response is not ok "))
            }
        }).catch( (err)=> {
            dispatch(modifyMessageFailed("Server is not ok with "+ err))
        })
    }
}