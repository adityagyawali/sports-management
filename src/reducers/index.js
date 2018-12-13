import { combineReducers } from "redux";
import addMessage from "./messageReducer";
import needPlayerReducer from './needPlayerReducer';

export default combineReducers({
	add: addMessage,
	needPlayerList: needPlayerReducer
});
