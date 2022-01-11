import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import Box from '~components/Box';
import Loading from '~components/Loading';
import useCurrentRestaurant from '~hooks/useCurrentRestaurant';
import useCurrentUser from '~hooks/useCurrentUser';
import { getCurrentRestaurant } from '~store/apiActions/Restaurant';
import { appBorderWidth } from '~utils/constants';
import CurrentOrderDetails from './CurrentOrderDetails';
import CurrentOrders from './CurrentOrders';
import LeftMenu from './LeftMenu';

const HomeScreen: React.FC<any> = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	StatusBar.setBarStyle('dark-content');
	const [tab, setTab] = useState(1);
	const orderManagement = useSelector((state: any) => state.orderManagement);
	const [{ id }, loading] = useCurrentRestaurant();
	const [currentUser] = useCurrentUser();
	const { profile = {} } = currentUser;
	useMount(() => {
		if (profile?.restaurant?.id) dispatch(getCurrentRestaurant(profile?.restaurant?.id));
	});
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<Box flex={1} bg='white' flexDirection='row'>
				<Box width={190} borderRightWidth={appBorderWidth} borderColor='sky' py='xl'>
					<LeftMenu {...{ tab, setTab }} />
				</Box>
				{loading ? (
					<Box flex={1} justifyContent='center' alignItems='center'>
						<Loading />
					</Box>
				) : [1, 2, 3].includes(tab) && !!id ? (
					<>
						<Box
							flex={1}
							bg='none'
							borderRightWidth={appBorderWidth}
							borderColor='sky'
							py='xl'>
							<CurrentOrders />
						</Box>
						<Box flex={0.9} bg='none' py='xl'>
							<CurrentOrderDetails />
						</Box>
					</>
				) : null}
			</Box>
		</SafeAreaView>
	);
};
export default HomeScreen;
