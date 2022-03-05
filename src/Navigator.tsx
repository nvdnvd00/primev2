import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import { Linking, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import CustomDrawer from '~components/Drawer';
import useCurrentUser from '~hooks/useCurrentUser';
import ExampleScreen from '~screens/ExampleScreen';
import Home from '~screens/Home';
import Login from '~screens/Login';
import { SCREEN_NAME } from '~utils/constants';
import { isEmptyObj } from '~utils/helper';

const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
	drawerStyle: {
		backgroundColor: 'transparent',
		width: DeviceInfo.isTablet() ? '20%' : '20%',
	},

	sceneContainerStyle: {
		backgroundColor: 'transparent',
	},
});
const drawerScreenOptions: DrawerNavigationOptions = {
	drawerType: 'slide',
	overlayColor: 'transparent',
	sceneContainerStyle: styles.sceneContainerStyle,
	drawerStyle: styles.drawerStyle,
};
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
	const [currentUser]: any = useCurrentUser();

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
	const DrawerNavigator = () => (
		<Drawer.Navigator
			screenOptions={drawerScreenOptions}
			drawerContent={(props: any) => {
				return <CustomDrawer {...props} />;
			}}>
			<Drawer.Screen name={SCREEN_NAME.EXAMPLE} component={ExampleScreen} />
		</Drawer.Navigator>
	);
	return (
		<NavigationContainer
			ref={navigationRef}
			initialState={initialState}
			onStateChange={(state: any) =>
				AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
			}>
			{isEmptyObj(currentUser) ? (
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
				</Stack.Navigator>
			) : (
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name={SCREEN_NAME.HOME} component={Home} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
});

export default AppStack;
