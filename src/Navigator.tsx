import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useQuery } from '@redux-requests/react';
import React, { memo } from 'react';
import { Linking } from 'react-native';
import Login from 'src/screens/Login';
import { loginTablet } from 'store/apiActions/Auth';
import { SCREEN_NAME } from 'utils/constants';
import ExampleScreen from './screens/ExampleScreen';

const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name: never, params: never) {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params);
	}
}

export const navigationGoBack = () => navigationRef.current?.goBack();

export const navigationReset = (name: string, params: object | undefined) => {
	navigationRef.current?.resetRoot({
		index: 0,
		routes: [{ name, params }],
	});
};

const PERSISTENCE_KEY = `navigationState.000`;
const AppStack = memo(() => {
	const { data = {} }: any = useQuery({ type: loginTablet });

	const [isReady, setIsReady] = React.useState(false);
	const [initialState, setInitialState] = React.useState();

	React.useEffect(() => {
		const restoreState = async () => {
			try {
				const initialUrl = await Linking.getInitialURL();

				if (initialUrl == null) {
					const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
					const state = savedStateString ? JSON.parse(savedStateString) : undefined;

					if (state !== undefined) {
						setInitialState(state);
					}
				}
			} finally {
				setIsReady(true);
			}
		};

		if (!isReady) restoreState();
	}, [isReady]);

	if (!isReady) return null;
	return (
		<NavigationContainer
			ref={navigationRef}
			initialState={initialState}
			onStateChange={(state: any) =>
				AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
			}>
			{!data ? (
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
				</Stack.Navigator>
			) : (
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name={SCREEN_NAME.EXAMPLE} component={ExampleScreen} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
});

export default AppStack;
