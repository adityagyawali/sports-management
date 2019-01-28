import { GET_MODIFY_EVENT_SUCCESS, 
        GET_MODIFY_EVENT_FAILED,  
        SUBMIT_MODIFIED_EVENT_SUCCESS,
        SUBMIT_MODIFIED_EVENT_FAILED,
        DELETE_EVENT_SUCCESS,
        DELETE_EVENT_FAILED,
        LOADING
} from "../actions/modifyEventActions";

const initalState = {
    loading: false,
    eventDetail : {},
    error: ""
}

function modifyEventReducer (state = initalState, action ){
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_MODIFY_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                eventDetail: action.item
            }

        case GET_MODIFY_EVENT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }    


        case SUBMIT_MODIFIED_EVENT_SUCCESS:
            return {
                ...state,
                loading: false
            }
        
        case SUBMIT_MODIFIED_EVENT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        case DELETE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false
            }
        
        case DELETE_EVENT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state

    }
}

export default modifyEventReducer;