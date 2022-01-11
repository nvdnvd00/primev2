import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Box from '~components/Box';
import OrderCard from '~components/OrderCard';
import Text from '~components/Text';
import { Theme } from '~theme';

interface OrdersProps {}

const Orders = (props: OrdersProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const { t } = useTranslation();
	const [selected, setSelected] = useState(0);
	const onItemSelect = useCallback((item: any) => {
		setSelected(item);
	}, []);
	const renderItem = ({ item, index }: any) => {
		const active = selected === item;
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
					data={[1, 2, 3, 4, 5, 6, 7, 8]}
					renderItem={renderItem}
					keyExtractor={(item, index) => index.toString()}
				/>
			</Box>
		</Box>
	);
};

export default Orders;
