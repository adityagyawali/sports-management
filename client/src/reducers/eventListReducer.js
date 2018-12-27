import {GET_EVENT_LIST_SUCCESS, GET_EVENT_LIST_FAILED, GET_EVENT_LIST_LOADING} from '../actions/eventListActions';

function getInitialState () {
    return { 
        list : [],
        error : "",
        loading : true
    }
}

const initialState = getInitialState();

function eventListReducer (state = initialState, action){

    switch(action.type){
        case GET_EVENT_LIST_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_EVENT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.item
            }
        
        case GET_EVENT_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        default:
            return state;
    }
}

export default eventListReducer;