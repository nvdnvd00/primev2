import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '~components/Box';
import Text from '~components/Text';

const CustomDrawer = (props: any) => {
	const { state, progress, navigation } = props;
	const { index, routes } = state;
	return (
		<Box flex={1} bg='white' borderRightWidth={StyleSheet.hairlineWidth} borderColor='red'>
			<SafeAreaView style={{ flex: 1 }}>
				<DrawerContentScrollView
					{...props}
					contentContainerStyle={styles.drawerContentContainerStyle}>
					{routes.map((route: any, position: any) => {
						const isFocused = index === position;
						return (
							<DrawerItem
								key={route.key}
								label={({ focused }) => {
									return (
										<Text
											style={
												focused ? styles.activeText : styles.inactiveText
											}>
											{route.name}
										</Text>
									);
								}}
								style={
									isFocused ? styles.activeContainer : styles.inActiveContainer
								}
								onPress={() => navigation.navigate(`${route.name}`)}
								focused={isFocused}
								activeBackgroundColor='transparent'
							/>
						);
					})}
				</DrawerContentScrollView>
			</SafeAreaView>
		</Box>
	);
};

export default CustomDrawer;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	drawerContentContainerStyle: {
		paddingTop: 0,
	},

	activeContainer: {
		borderLeftWidth: wp(1.06),
		borderLeftColor: '#00b8d4',
		backgroundColor: 'rgba(0,0,0,0.2)',
		borderRadius: wp(0.8),
		marginTop: 0,
	},

	activeText: {
		fontWeight: 'bold',
		color: '#00b8d4',
		backgroundColor: 'transparent',
	},

	inActiveContainer: {
		borderLeftWidth: wp(1.06),
		borderLeftColor: 'transparent',
		backgroundColor: 'transparent',
		borderRadius: wp(0.8),
		marginTop: 0,
	},

	inactiveText: {
		fontWeight: 'bold',
		color: 'rgba(255, 255, 255, 0.8)',
		backgroundColor: 'transparent',
	},
});
