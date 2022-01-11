import { createSmartAction } from 'redux-smart-actions';
import { API_VERSION, BASE_API } from '~config';
import { API_METHOD } from '~utils/constants';

export const getCurrentRestaurant: any = createSmartAction((restaurantId: number) => ({
	request: [
		{
			url: `${BASE_API}/restaurant${API_VERSION}/restaurant/${restaurantId}`,
			method: API_METHOD.GET,
		},
		{
			url: `${BASE_API}/restaurant-layout${API_VERSION}/floors?restaurantId=${restaurantId}`,
			method: API_METHOD.GET,
		},
	],

	meta: {
		onSuccess: async (response: any, requestAction: any, store: any) => {
			const { data: [restaurantResponse, floorsResponse] = [] } = response;
			return {
				// ...response,
				data: {
					...(restaurantResponse?.data ?? {}),
					floors: (floorsResponse?.data ?? []).map((f: any, index: number) => ({
						...f,
						active: index === 0,
					})),
				},
			};
		},
	},
}));
