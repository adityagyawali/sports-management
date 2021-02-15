import { ADD } from "./actionTypes";

export const addMessage = msg => {
	return {
		type: ADD,
		payload: msg
	};
};
