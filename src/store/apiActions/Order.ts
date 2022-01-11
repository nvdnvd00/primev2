import { createSmartAction } from 'redux-smart-actions';
import { API_VERSION, BASE_API } from '~config';
import { API_METHOD } from '~utils/constants';
import { setParamsUrl } from '~utils/helper';

export const getInProgressOrders: any = createSmartAction(
	(restaurantId: number, floorId: number) => ({
		request: {
			url:
				`${BASE_API}/order${API_VERSION}/orders/get-in-progress-orders?` +
				setParamsUrl({ restaurantId, floorId }),
			method: API_METHOD.GET,
		},

		meta: {
			onSuccess: async (response: any, requestAction: any, store: any) => {
				return response.data;
			},
		},
	}),
);

export const getInProgressOrderDetails: any = createSmartAction((id: number) => ({
	request: {
		url: `${BASE_API}/order${API_VERSION}/order/${id}`,
		method: API_METHOD.GET,
	},

	meta: {
		onSuccess: async (response: any, requestAction: any, store: any) => {
			return response.data;
		},
	},
}));
