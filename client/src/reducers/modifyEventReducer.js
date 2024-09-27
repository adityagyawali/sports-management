import { GET_MODIFY_DETAIL_SUCCESS, 
        GET_MODIFY_DETAIL_FAILED, 
        LOADING, 
        SUBMIT_MODIFIED_DETAIL_SUCCESS,
        SUBMIT_MODIFIED_DETAIL_FAILED
} from "../actions/modifyEventActions";

const initalState = {
    loading: true,
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

        case GET_MODIFY_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                eventDetail: action.item
            }

        case GET_MODIFY_DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }    


        case SUBMIT_MODIFIED_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false
            }
        
        case SUBMIT_MODIFIED_DETAIL_FAILED:
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