import {LOADING, GET_EVENT_DETAIL_SUCCESS, GET_EVENT_DETAIL_FAILED} from '../actions/eventDetailActions';

const initialState = {
    list: {},
    loading: true,
    error:""
}

function eventDetailReducer (state = initialState, action){
    switch(action.type){

        case LOADING:
            return {
				...state,
				loading: true
            }

        case GET_EVENT_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.item[0]
            }

        case GET_EVENT_DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        default:
            return state;
    }
}

export default eventDetailReducer;