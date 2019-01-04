import {LOADING, GET_EVENT_DETAIL_SUCCESS, GET_EVENT_DETAIL_FAILED, GET_JOINED_PLAYER_SUCCESS, GET_JOINED_PLAYER_FAILED} from '../actions/eventDetailActions';

const initialState = {
    list: {},
    joinedPlayer: [],
    loading: true,
    joinedPlayerLoading: true,
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

        case GET_JOINED_PLAYER_SUCCESS:
            return {
                ...state,
                joinedPlayerLoading: false,
                joinedPlayer: action.item
            }
        case GET_JOINED_PLAYER_FAILED:
            return {
                joinedPlayer: [],
                joinedPlayerLoading: false,
                error: action.error
            }
        
        default:
            return state;
    }
}

export default eventDetailReducer;