import {JOIN_EVENT_SUCCESS, JOIN_EVENT_FAILED, MODIFY_MESSAGE_SUCCESS, MODIFY_MESSAGE_FAILED, LOADING } from "../actions/joinEventActions";

const initialState = {
    loading: true,
    response: "",
    error: ""
}

function joinEventReducer (state = initialState, action){
    switch(action.type){

        case LOADING:
            return {
                ...state, 
                loading: true
            }

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

        case MODIFY_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false
            } 
        
        case MODIFY_MESSAGE_FAILED:
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