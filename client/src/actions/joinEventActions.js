export const JOIN_EVENT_SUCCESS = "JOIN_EVENT_SUCCESS"
export const JOIN_EVENT_FAILED = "JOIN_EVENT_FAILED"

//action type

const joinEventSuccess = (item) => ({
    type: JOIN_EVENT_SUCCESS,
    item: item
})

const joinEvnetFailed = (error) => ({
    type: JOIN_EVENT_FAILED,
    error: error
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

