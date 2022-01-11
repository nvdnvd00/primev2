import { useTheme } from '@shopify/restyle';
import * as React from 'react';
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
					renderItem={({ item, index }: any) => <OrderCard />}
					keyExtractor={(item, index) => index.toString()}
				/>
			</Box>
		</Box>
	);
};

export default Orders;
