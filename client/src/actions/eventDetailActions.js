export const GET_EVENT_DETAIL_SUCCESS = "GET_EVENT_DETAIL_SUCCESS"
export const GET_EVENT_DETAIL_FAILED = "GET_EVENT_DETAIL_FAILED"
export const GET_JOINED_PLAYER_SUCCESS = "GET_JOINED_PLAYER_SUCCESS"
export const GET_JOINED_PLAYER_FAILED = "GET_JOINED_PLAYER_FAILED"
export const LOADING = "LOADING";

//ACTION //이 액션에 어떠한 것을 담아서 보내줄것이냐 결정

const getEventDetailSuccess = (item) => {
    return {
        type: GET_EVENT_DETAIL_SUCCESS,
        item: item
    }
}

const getEventDetailFailed = (error) => {
    return {
        type: GET_EVENT_DETAIL_FAILED,
        error: error
    }
}

const getJoinedPlayerSuccess = (item) => {
    return {
        type: GET_JOINED_PLAYER_SUCCESS,
        item: item
    }
}

const getJoinedPlayerFailed = (error) => {
    return {
        type: GET_JOINED_PLAYER_FAILED,
        error: error
    }
}

const loading = () => {
	return {
		type: LOADING
	}
}

//action creator

export const getEventDetail = (id) => {
    return dispatch => {
        let getObject = {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        }
        
        dispatch(loading());

        fetch("/api/getEventDetail/"+id, getObject).then( (response) => {
            if(response.ok){
                response.json().then((data) => {
                    dispatch(getEventDetailSuccess(data));
                }).catch((error) => {
                    dispatch(getEventDetailFailed("response json.stringfy problem:" + error ));
                })
            }else {
                dispatch(getEventDetailFailed("Response not ok. Status:" + response.status ));
            }
        }).catch( 
            (error) => {dispatch(getEventDetailFailed("Server responded with error: " + error))}
        )
    }
}

export const getJoinedPlayers = (id) => {
    return dispatch => {
        const postObject = {
            method: "POST",
            mode:"cors",
            credentials:"include",
            headers: {"Content-Type": "application/json"}
        }
        
        dispatch(loading());

        fetch("/api/getJoinedPlayers/"+id, postObject).then( (response) => {
            if(response.ok){
                response.json().then( (item)=>{
                    dispatch(getJoinedPlayerSuccess(item))
                }).catch( (error)=>{
                    dispatch(getJoinedPlayerFailed("response.json() not ok with: "+ error))
                })
            }else{
                dispatch(getJoinedPlayerFailed("response not ok with: "+ response.status))
            }
        }).catch( (error)=> {
            dispatch(getJoinedPlayerFailed("server not ok with: "+ error))
        })
    }
}