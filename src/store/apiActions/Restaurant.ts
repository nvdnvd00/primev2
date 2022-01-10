import { createSmartAction } from 'redux-smart-actions';
import { API_VERSION, BASE_API } from '~config';

export const getRestaurantDetail: any = createSmartAction((restaurantId: number) => ({
	request: [
		{
			url: `${BASE_API}/restaurant${API_VERSION}/restaurant/${restaurantId}`,
		},
		{
			url: `${BASE_API}/restaurant-layout${API_VERSION}/floors?restaurantId=${restaurantId}`,
		},
	],
	// request: {
	// 	url: `${BASE_API}/restaurant${API_VERSION}/restaurant/${restaurantId}`,
	// },
	meta: {
		onSuccess: async (response: any, requestAction: any, store: any) => {
			const { data: [restaurantResponse, floorsResponse] = [] } = response;
			return { ...(restaurantResponse?.data ?? {}), floors: floorsResponse?.data ?? [] };
		},
	},
}));
