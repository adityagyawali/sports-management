export const ADD_TO_NEEDPLAYERLIST_SUCCESS = "ADD_TO_NEEDPLAYERLIST_SUCCESS";
export const ADD_TO_NEEDPLAYERLIST_FAILED = "ADD_TO_NEEDPLAYERLIST_FAILED";


//ACTION

const addToNeedplayerListSuccess = (item) => {
    return {
        type: ADD_TO_NEEDPLAYERLIST_SUCCESS,
        item: item
    }
}

const addToNeedplayerListFailed = (error) => {
    return {
        type: ADD_TO_NEEDPLAYERLIST_FAILED,
        error: error
    }
}

//action creator

export const addToNeedPlayerList = (item)=>{
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }

        fetch("/addToNeedPlayersList", postObject).then( (response) => {
            if(response.ok){
                response.json().then((resData) => {
                    dispatch(addToNeedplayerListSuccess(resData));
                }).catch((error) => {
                    dispatch(addToNeedplayerListFailed("response json.stringfy problem:" + error ));
                })
                

            }else {
                dispatch(addToNeedplayerListFailed("Response not ok. Status:" + response.status ));
                
            }
        }).catch( 
            (error) => {dispatch(addToNeedplayerListFailed("Server responded with error: " + error))}
        )
    }
}