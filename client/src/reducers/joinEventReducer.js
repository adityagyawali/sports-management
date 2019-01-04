import {JOIN_EVENT_SUCCESS, JOIN_EVENT_FAILED} from "../actions/joinEventActions";

const initialState = {
    loading: true,
    response: "",
    error: ""
}

function joinEventReducer (state = initialState, action){
    switch(action.type){
        case JOIN_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.item
            }
        case JOIN_EVENT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default joinEventReducer;