import {JOIN_EVENT_SUCCESS, 
    JOIN_EVENT_FAILED, 
    MODIFY_MESSAGE_SUCCESS, 
    MODIFY_MESSAGE_FAILED, 
    DELETE_MESSAGE_SUCCESS, 
    DELETE_MESSAGE_FAILED, 
    LOADING } from "../actions/joinEventActions";

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

        case DELETE_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case DELETE_MESSAGE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case LOADING:
            return {
                ...state, 
                loading: true
            }
        default:
            return state;
    }
}

export default joinEventReducer;