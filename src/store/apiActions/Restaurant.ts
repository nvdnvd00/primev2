import { createSmartAction, createSmartThunk } from 'redux-smart-actions';
import { API_VERSION, BASE_API } from 'src/config';

export const getRestaurantDetail: any = createSmartAction((restaurantId: number) => ({
	// request: [
	// 	{
	// 		url: `${BASE_API}/restaurant${API_VERSION}/restaurant/${restaurantId}`,
	// 	},
	// 	{
	// 		url: `${BASE_API}/restaurant-layout${API_VERSION}/floors?restaurantId=${restaurantId}`,
	// 	},
	// ],
	request: {
		url: `${BASE_API}/restaurant${API_VERSION}/restaurant/${restaurantId}`,
	},
	meta: {
		onSuccess: async (response: any, requestAction: any, store: any) => {
			return response;
		},
	},
}));

export const getFloors: any = createSmartThunk(
	(restaurantId: number) => (dispatch, getState, extraArguments) => {
		return {
			request: {
				url: `${BASE_API}/restaurant-layout${API_VERSION}/floors?restaurantId=${restaurantId}`,
			},

			meta: {
				onSuccess: async (response: any, requestAction: any, store: any) => {
					return response;
				},
			},
		};
	},
);
