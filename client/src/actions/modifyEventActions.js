export const GET_MODIFY_DETAIL_SUCCESS = "GET_MODIFY_DETAIL_SUCCESS"
export const GET_MODIFY_DETAIL_FAILED = "GET_MODIFY_DETAIL_FAILED"
export const SUBMIT_MODIFIED_DETAIL_SUCCESS = "SUBMIT_MODIFIED_DETAIL_SUCCESS"
export const SUBMIT_MODIFIED_DETAIL_FAILED = "SUBMIT_MODIFIED_DETAIL_FAILED"

export const LOADING = "LOADING";

//what to return 
const getModifyDetailSuccess = (item) => {
    return {
        type: GET_MODIFY_DETAIL_SUCCESS,
        item: item
    }
}

const getModifyDetailFailed = (error) => {
    return {
        type: GET_MODIFY_DETAIL_FAILED,
        error: error
    }
}

const submitModifiedDetailSuccess = () => {
    return {
        type: SUBMIT_MODIFIED_DETAIL_SUCCESS
    }
}

const submitModifiedDetailFailed = (error) => {
    return {
        type: SUBMIT_MODIFIED_DETAIL_FAILED,
        error: error
    }
}

const loading = () => {
	return {
		type: LOADING
	}
}

//action
export const getModifyDetail = (id) => {
    return dispatch => {
        const postObject = {
            method: "POST",
            mode:"cors",
            credentials:"include",
            headers: {"Content-Type": "application/json"}
        }
        
        dispatch(loading());

        fetch("/api/getModifyDetail/"+id, postObject).then( response => {
            if(response.ok){
                response.json().then( item => {
                    dispatch(getModifyDetailSuccess(item))
                }).catch( err => {
                    dispatch(getModifyDetailFailed("response.json() not ok"))
                })
            }else{
                dispatch(getModifyDetailFailed("response not ok"))
            }
        }).catch( (err) => {
            dispatch(getModifyDetailFailed("server not ok with:"+ err))
        });
    }
}

export const submitModifyEvent = (item, eventId, goToEventDetailPage) => {
    return dispatch => {
        const postObject = {
            method: "POST",
            mode:"cors",
            credentials:"include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }
    
        dispatch(loading())
    
        fetch("/api/saveModifiedEvent/"+ eventId, postObject).then( response => {
            if(response.ok){
                dispatch(submitModifiedDetailSuccess())
                goToEventDetailPage()
            }else{
                dispatch(submitModifiedDetailFailed("response not ok"))
            }
        }).catch( (err) =>{
            dispatch(submitModifiedDetailFailed("Server not ok with " + err))
        });
    }
} 