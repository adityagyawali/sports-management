import { combineReducers } from "redux";
import addMessage from "./messageReducer";
import needPlayerReducer from './needPlayerReducer';
import eventListReducer from './eventListReducer';

export default combineReducers({
	add: addMessage,
	needPlayerList: needPlayerReducer,
	eventList: eventListReducer
});
