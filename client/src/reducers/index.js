import { combineReducers } from "redux";
import needPlayerReducer from "./needPlayerReducer";
import eventListReducer from "./eventListReducer";
import eventDetailReducer from "./eventDetailReducer";
import joinEventReducer from './joinEventReducer';
import modifyEventReducer from './modifyEventReducer';
import signUp_LoginReducer from './signUp_LogInReducer';

export default combineReducers({
	needPlayerList: needPlayerReducer,
	eventList: eventListReducer,
	eventDetail: eventDetailReducer,
	joinEvent : joinEventReducer,
	modifyEvent: modifyEventReducer,
	login: signUp_LoginReducer,
});
