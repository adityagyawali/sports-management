import { CURRENT_USER } from "../actions/actionTypes";
import { isEmpty } from "../utils/is-Empty";
const initalState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initalState, action) => {
	switch (action.type) {
		case CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};

		default:
			return state;
	}
};
