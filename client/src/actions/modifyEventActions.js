export const GET_MODIFY_EVENT_SUCCESS = "GET_MODIFY_EVENT_SUCCESS"
export const GET_MODIFY_EVENT_FAILED = "GET_MODIFY_EVENT_FAILED"
export const SUBMIT_MODIFIED_EVENT_SUCCESS = "SUBMIT_MODIFIED_EVENT_SUCCESS"
export const SUBMIT_MODIFIED_EVENT_FAILED = "SUBMIT_MODIFIED_EVENT_FAILED"
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"
export const DELETE_EVENT_FAILED = "DELETE_EVENT_FAILED"
export const LOADING = "LOADING";

//what to return 
const getModifyEventSuccess = (item) => {
    return {
        type: GET_MODIFY_EVENT_SUCCESS,
        item: item
    }
}

const getModifyEventFailed = (error) => {
    return {
        type: GET_MODIFY_EVENT_FAILED,
        error: error
    }
}

const submitModifiedEventSuccess = () => {
    return {
        type: SUBMIT_MODIFIED_EVENT_SUCCESS
    }
}

const submitModifiedEventFailed = (error) => {
    return {
        type: SUBMIT_MODIFIED_EVENT_FAILED,
        error: error
    }
}

const deleteEventSuccess = () => ({
    type: DELETE_EVENT_SUCCESS
})

const deleteEventFailed = (error) => ({
    type: DELETE_EVENT_FAILED,
    error: error
})

const loading = () => {
	return {
		type: LOADING
	}
}

//action
export const getModifyEvent = (id) => {
    return dispatch => {
        const postObject = {
            method: "POST",
            mode:"cors",
            credentials:"include",
            headers: {"Content-Type": "application/json"}
        }
        
        dispatch(loading());

        fetch("/api/getModifyEvent/"+id, postObject).then( response => {
            if(response.ok){
                response.json().then( item => {
                    dispatch(getModifyEventSuccess(item))
                }).catch( err => {
                    dispatch(getModifyEventFailed("response.json() not ok"))
                })
            }else{
                dispatch(getModifyEventFailed("response not ok"))
            }
        }).catch( (err) => {
            dispatch(getModifyEventFailed("server not ok with:"+ err))
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
                dispatch(submitModifiedEventSuccess())
                goToEventDetailPage()
            }else{
                dispatch(submitModifiedEventFailed("response not ok"))
            }
        }).catch( (err) =>{
            dispatch(submitModifiedEventFailed("Server not ok with " + err))
        });
    }
}

export const deleteEvent = (id, goToEventListPage) => {
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials:"include",
            headers:{"Content-Type":"application/json"}
        }

        dispatch(loading())

        fetch("/api/deleteEvent/"+ id, postObject).then( response => {
            if(response.ok){
                response.json().then( resData => {
                    dispatch(deleteEventSuccess())
                    goToEventListPage()
                }).catch( error => {
                    dispatch(deleteEventFailed("response.json() is not ok with"+ error))
                })
            }else{
                dispatch(deleteEventFailed("response is not ok"))
            }
        }).catch( error => {
            dispatch(deleteEventFailed("server is not ok with"+ error))
        })


    }
}