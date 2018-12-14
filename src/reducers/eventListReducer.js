import {GET_EVENT_LIST_SUCCESS, GET_EVENT_LIST_FAILED} from '../actions/eventListActions';

function getInitialState () {
    let list = {};
    let error = "";
    let tempState = {
        list: list,
        error: error
    }
    return tempState;
}

const initialState = getInitialState();

function eventListReducer (state = initialState, action){
    let tempState = {};
    switch(action.type){
        case GET_EVENT_LIST_SUCCESS:
            tempState = {
                ...state,
                list: action.item
            }
            return tempState;
        
        case GET_EVENT_LIST_FAILED:
            tempState = {
                ...state,
                error: action.error
            }
            return tempState;
        default:
            return state;
    }
}

export default eventListReducer;