import { createSmartThunk } from 'redux-smart-actions';
import { setParamsUrl } from 'utils/helper';

export const getUsers: any = createSmartThunk(
	(params: any) => (dispatch, getState, extraArguments) => {
		const state = getState();
		return {
			request: {
				url: `https://randomuser.me/api?` + setParamsUrl(params),
			},
			meta: {
				asMutation: false,
			},
		};
	},
);
