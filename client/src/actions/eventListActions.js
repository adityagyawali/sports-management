export const GET_EVENT_LIST_SUCCESS = "GET_EVENT_LIST_SUCCESS";
export const GET_EVENT_LIST_FAILED = "GET_EVENT_LIST_FAILED";
export const GET_EVENT_LIST_LOADING = "GET_EVENT_LIST_LOADING";

//ACTION
const getEventListSuccess = (item) => {
    return {
        type: GET_EVENT_LIST_SUCCESS,
        item: item
    }
}

const getEventListFailed = (error) => {
    return {
        type: GET_EVENT_LIST_FAILED,
        error: error
    }
}

const getEventListLoading = () => {
    return {
        type: GET_EVENT_LIST_LOADING
    }
}

//action creator
export const getEventList = ()=> {
    return dispatch => {
        let getObject = {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        }

        dispatch(getEventListLoading());

        fetch("/getEventList", getObject).then( (response) => {
            if(response.ok){
                response.json().then((data) => {
                    dispatch(getEventListSuccess(data));
                }).catch((error) => {
                    dispatch(getEventListFailed("response json.stringfy problem:" + error ));
                })
            }else {
                dispatch(getEventListFailed("Response not ok. Status:" + response.status ));
            }
        }).catch( 
            (error) => {dispatch(getEventListFailed("Server responded with error: " + error))}
        )
    }
}