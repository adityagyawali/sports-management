import { combineReducers } from "redux";
import addMessage from "./messageReducer";

export default combineReducers({
	add: addMessage
});
