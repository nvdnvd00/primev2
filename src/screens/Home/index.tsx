import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Box from '~components/Box';
import { appBorderWidth } from '~utils/constants';
import LeftMenu from './LeftMenu';
import OrderDetail from './OrderDetail';
import Orders from './Orders';

const HomeScreen: React.FC<any> = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	StatusBar.setBarStyle('dark-content');
	const [tab, setTab] = useState(1);
	const orderManagement = useSelector((state: any) => state.orderManagement);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<Box flex={1} bg='white' flexDirection='row'>
				<Box width={190} borderRightWidth={appBorderWidth} borderColor='sky' py='xl'>
					<LeftMenu {...{ tab, setTab }} />
				</Box>
				<Box flex={1} bg='none' borderRightWidth={appBorderWidth} borderColor='sky' py='xl'>
					<Orders />
				</Box>
				<Box flex={0.9} bg='none' py='xl'>
					<OrderDetail />
				</Box>
			</Box>
		</SafeAreaView>
	);
};
export default HomeScreen;
