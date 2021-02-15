import { combineReducers } from "redux";
import addMessage from "./messageReducer";
import needPlayerReducer from "./needPlayerReducer";
import eventListReducer from "./eventListReducer";
import eventDetailReducer from "./eventDetailReducer";
import joinEventReducer from './joinEventReducer';
import modifyEventReducer from './modifyEventReducer';
import authReducer from "./authReducer";

export default combineReducers({
	add: addMessage,
	needPlayerList: needPlayerReducer,
	eventList: eventListReducer,
	eventDetail: eventDetailReducer,
	joinEvent : joinEventReducer,
	modifyEvent: modifyEventReducer,
	auth: authReducer
});
