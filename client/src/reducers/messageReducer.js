import { ADD } from "../actions/actionTypes";

const initialState = [];

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return state.concat([action.payload]);
		default:
			return state;
	}
}
