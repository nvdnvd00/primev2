import DeviceInfo from 'react-native-device-info';
import { createSmartThunk } from 'redux-smart-actions';
import { API_VERSION, BASE_API } from '~config';
import { API_METHOD } from '~utils/constants';

export const loginTablet: any = createSmartThunk(
	(data: any) => (dispatch, getState, extraArguments) => {
		const id = DeviceInfo.getUniqueId();
		return {
			request: {
				url: `${BASE_API}/user${API_VERSION}/user/login-tablet`,
				method: API_METHOD.POST,
				data: { ...data, device: { id } },
			},
			meta: {
				asMutation: false,
				onSuccess: async (response: any, requestAction: any, store: any) => {
					return response.data;
				},
			},
		};
	},
);
