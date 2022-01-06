import DeviceInfo from 'react-native-device-info';
import { createSmartThunk } from 'redux-smart-actions';
import { AUTH_ENDPOINTS } from 'src/apis';
import { API_METHOD } from 'utils/constants';

export const loginTablet: any = createSmartThunk(
	(data: any) => (dispatch, getState, extraArguments) => {
		const id = DeviceInfo.getUniqueId();
		return {
			request: {
				url: `${AUTH_ENDPOINTS.LOGIN}`,
				method: API_METHOD.POST,
				data: { ...data, device: { id } },
			},
			meta: {
				asMutation: false,
				onSuccess: async (response: any, requestAction: any, store: any) => {
					return response;
				},
			},
		};
	},
);
