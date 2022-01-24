import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDriver } from '@redux-requests/axios';
import { getQuery, handleRequests } from '@redux-requests/core';
import axios from 'axios';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import i18next from '~translations';
import Reactotron from '../../ReactotronConfig';
import { loginTablet } from './apiActions/Auth';
import orderManagementReducer from './reducers/orderManagementReducer';

const onRequest = (request: any, requestAction: any, store: any) => {
	const state = store.getState();
	const { data = {} } = getQuery(state, { type: loginTablet });
	const buildRequest = (rawRequest: any) => {
		const { headers } = rawRequest;
		return {
			...rawRequest,
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': i18next.language,
				isTabletUser: true,
				Authorization: `${data?.IdToken}`,
				AccessToken: `${data?.AccessToken}`,
				...headers,
			},
		};
	};

	return request?.map?.(buildRequest) ?? buildRequest(request);
};

const onSuccess = async (response: any, requestAction: any, store: any) => {
	const { notification } = requestAction;

	if (notification?.onSuccess) {
		const message = notification.onSuccess(response);
		// show alert success  ({ message });
	}

	return response;
};

const onError = async (error: any, requestAction: any, store: any) => {
	const { response, message, errors } = error;
	console.log(error, requestAction, store);
	try {
		if (response) {
			const { status, data } = response;
			if (data) {
				const { error, message } = data;
				if (error?.message) throw error?.message;
				if (message) throw message;
			}
			if (status === 401) {
				// delete token : await AsyncStorage.removeItem('token');
				//  require log in again
			}
			if (status >= 400) throw 'Có lỗi không mong muốn xảy ra';
		}

		if (message) throw message;

		if (error.toString().includes('Network Error')) throw 'Lỗi kết nối, vui lòng thử lại';

		throw error;
	} catch (msg) {
		const { notification } = requestAction;
		if (notification?.onError === false) return;

		const message = notification?.onError?.(msg, error) ?? msg;
		// show alert ({ message });

		throw msg;
	}
};

const { requestsReducer, requestsMiddleware } = handleRequests({
	driver: createDriver(axios),
	onRequest,
	onError,
	onSuccess,
});

const reducer = combineReducers({
	requests: requestsReducer,
	orderManagement: orderManagementReducer,
	// more reducer,
});
const composeEnhancers = compose;
const logger = createLogger();

const persistConfig: any = {
	version: 1,
	timeout: 10000,
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['requests'],
	stateReconciler: autoMergeLevel2,
};

export default createStore(
	persistReducer(persistConfig, reducer),
	compose(
		// @ts-ignore
		Reactotron.createEnhancer(),
		composeEnhancers(applyMiddleware(thunk, logger, ...requestsMiddleware)),
	),
);
