import {ADD_TO_NEEDPLAYERLIST_SUCCESS, 
        ADD_TO_NEEDPLAYERLIST_FAILED,
        GET_SPORTS_CATEGORY_SUCCESS,
        GET_SPORTS_CATEGORY_FAILED,
        GET_REGION_CATEGORY_SUCCESS,
        GET_REGION_CATEGORY_FAIELD,
        LOADING } from '../actions/needPlayersActions';


function getInitialState (){
    return {
        regionCategoryList: [],
        sportCategoryList: [],
        error: "",
        loading: true
    }
}

let initialState = getInitialState ();

function needPlayersReducer ( state = initialState, action){
    let tempState = {};

    switch(action.type){
        case ADD_TO_NEEDPLAYERLIST_SUCCESS:
            tempState = {
                ...state,
                loading: false,
                error:""
            }    
        
            return tempState;
            
        case ADD_TO_NEEDPLAYERLIST_FAILED: 
            tempState = {
                ...state,
                loading: false,
                error: action.error
            }     
            return tempState

        case GET_SPORTS_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                sportCategoryList: action.item
            }
        
        case GET_SPORTS_CATEGORY_FAILED:
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        case GET_REGION_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                regionCategoryList: action.item
            }
        case GET_REGION_CATEGORY_FAIELD:
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

export default needPlayersReducer;