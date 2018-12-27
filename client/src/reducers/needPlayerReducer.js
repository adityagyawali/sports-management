import {ADD_TO_NEEDPLAYERLIST_SUCCESS, ADD_TO_NEEDPLAYERLIST_FAILED} from '../actions/needPlayersActions';


function getInitialState (){
    let list=[];
    let error = "";
    
    return {
        list: list,
        error: error
    }
}

let initialState = getInitialState ();

function needPlayersReducer ( state = initialState, action){
    let tempState = {};

    switch(action.type){
        case ADD_TO_NEEDPLAYERLIST_SUCCESS:
            tempState = {
                ...state,
                error:""
            }    
        
            return tempState;
            
        case ADD_TO_NEEDPLAYERLIST_FAILED: 
            tempState = {
                ...state,
                error: action.error
            }     
        
            return tempState
            
        default:
            return state;
    }

}

export default needPlayersReducer;