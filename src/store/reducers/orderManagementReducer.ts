import update from 'immutability-helper';
import { createReducer, joinTypes } from 'redux-smart-actions';
import { setFloor } from '~store/actions/OrderManagementActions';
const initState: any = {
	floor: {},
};

const orderManagementReducer = createReducer(
	{
		[joinTypes(setFloor)]: (state, action) =>
			update(state, { floor: { $set: action?.floor ?? {} } }),
	},
	initState,
);

export default orderManagementReducer;
