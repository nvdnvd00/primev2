import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import Box from '~components/Box';
import Button from '~components/Button';
import Loading from '~components/Loading';
import Text from '~components/Text';
import { AppIcons } from '~config';
import useCurrentFloor from '~hooks/useCurrentFloor';
import useCurrentRestaurant from '~hooks/useCurrentRestaurant';
import useCurrentUser from '~hooks/useCurrentUser';
import { getCurrentRestaurant } from '~store/apiActions/Restaurant';
import { Theme } from '~theme';
import { appBorderWidth } from '~utils/constants';
import CurrentOrderDetails from './CurrentOrderDetails';
import CurrentOrders from './CurrentOrders';
import LeftMenu from './LeftMenu';

const HomeScreen: React.FC<any> = () => {
	const { t } = useTranslation();
	const { colors } = useTheme<Theme>();
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	StatusBar.setBarStyle('dark-content');
	const [tab, setTab] = useState(1);
	const orderManagement = useSelector((state: any) => state.orderManagement);
	const [{ id }, loading] = useCurrentRestaurant();
	const [currentUser] = useCurrentUser();
	const [floor] = useCurrentFloor();
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
					<Box flex={1}>
						<Box
							bg='none'
							width={'100%'}
							borderBottomWidth={appBorderWidth}
							borderColor='sky'
							flexDirection='row'
							alignItems='center'
							justifyContent='space-between'
							p='l'>
							<Box flexDirection='row' alignItems='center'>
								<Button mr='l' flexDirection='row' alignItems='center'>
									<AppIcons name='Category' size={25} color={colors.shadow} />
									<Text variant='body' color='shadow' ml='s'>
										{floor.name}
									</Text>
								</Button>
								{/*  */}
								<Button mr='l' flexDirection='row' alignItems='center'>
									<AppIcons name='Play' size={25} color={colors.shadow} />
									<Text variant='body' color='shadow' ml='s'>
										{t('Online')}
									</Text>
								</Button>
							</Box>
							<Box flexDirection='row' alignItems='center'>
								<Button mr='l' flexDirection='row' alignItems='center'>
									<AppIcons name='Notification' size={25} color={colors.shadow} />
									<Text variant='body' color='shadow' ml='s'>
										{t('Notification')}
									</Text>
								</Button>
								<Button mr='none' flexDirection='row' alignItems='center'>
									<AppIcons name='Download' size={25} color={colors.shadow} />
									<Text variant='body' color='shadow' ml='s'>
										{t('Sync')}
									</Text>
								</Button>
							</Box>
						</Box>
						<Box flexDirection='row' flex={1}>
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
						</Box>
					</Box>
				) : null}
			</Box>
		</SafeAreaView>
	);
};
export default HomeScreen;
