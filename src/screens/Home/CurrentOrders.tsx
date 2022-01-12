import { resetRequests } from '@redux-requests/core';
import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { useInterval, useMount } from 'react-use';
import Box from '~components/Box';
import OrderCard from '~components/OrderCard';
import Text from '~components/Text';
import useCurrentFloor from '~hooks/useCurrentFloor';
import useCurrentOrders from '~hooks/useCurrentOrders';
import useCurrentRestaurant from '~hooks/useCurrentRestaurant';
import { getInProgressOrderDetails, getInProgressOrders } from '~store/apiActions/Order';
import { Theme } from '~theme';
interface CurrentOrdersProps {}

const CurrentOrders = (props: CurrentOrdersProps) => {
	const dispatch = useDispatch<any>();
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const { t } = useTranslation();
	const [selected, setSelected] = useState(null);
	const [{ id }] = useCurrentRestaurant();
	const [{ id: floorId }] = useCurrentFloor();
	const [orders] = useCurrentOrders();
	// const [currentOrderDetails = {}] = useCurrentOrderDetails();

	useMount(() => {
		dispatch(getInProgressOrders(id, floorId));
		dispatch(resetRequests([getInProgressOrderDetails]));
	});
	useInterval(
		() => {
			dispatch(getInProgressOrders(id, floorId));
		},
		!!id && !!floorId ? 60 * 1000 : null,
	);
	const onItemSelect = useCallback((id: any) => {
		dispatch(getInProgressOrderDetails(id));
		setSelected(id);
	}, []);
	const renderItem = ({ item, index }: any) => {
		const active = selected === item.id;
		return <OrderCard onSelect={onItemSelect} {...{ active, data: item }} />;
	};
	return (
		<Box flex={1} bg='white'>
			<Text variant='bigHead' px='xl'>
				{t('Orders')}
			</Text>
			<Box flex={1} pt='xl'>
				<FlatList
					style={{
						flex: 1,
						paddingHorizontal: spacing.xl,
					}}
					data={orders}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.id.toString()}
				/>
			</Box>
		</Box>
	);
};

export default CurrentOrders;
