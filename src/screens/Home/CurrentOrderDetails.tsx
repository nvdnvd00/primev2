import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Box from '~components/Box';
import Button from '~components/Button';
import Loading from '~components/Loading';
import OrderDetailsItem from '~components/OrderDetailsItem';
import Text from '~components/Text';
import { AppIcons } from '~config';
import useCurrentOrderDetails from '~hooks/useCurrentOrderDetails';
import { Theme } from '~theme';
import { appBorderWidth } from '~utils/constants';
import { formatCurrency } from '~utils/helper';
import { getCreatedName } from '~utils/orderHelper';
import { getRestaurantCurrency } from '~utils/restaurantHelper';

interface CurrentOrderDetailsProps {}

const CurrentOrderDetails = ({}: CurrentOrderDetailsProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const { t } = useTranslation();
	const [currentOrderDetails = {}, loading] = useCurrentOrderDetails();
	const { orderItems = [], orderNumber, id, restaurant = {}, total } = currentOrderDetails;
	const Dashed = () => (
		<Box
			m='xl'
			borderWidth={appBorderWidth}
			borderStyle='dashed'
			height={appBorderWidth / 3}
			borderColor='sky'
		/>
	);
	if (loading)
		return (
			<Box justifyContent='center' alignItems='center' flex={1}>
				<Loading />
			</Box>
		);
	if (!id) return null;
	return (
		<Box flex={1} bg='white'>
			<Box flexDirection='row' justifyContent='space-between' px='xl'>
				<Text variant='bigHead'>{t('Details')}</Text>
				<AppIcons name='Chat' color={colors.disabled} size={25} />
			</Box>
			<Dashed />
			<Box flexDirection='row' justifyContent='space-between' px='xl'>
				<Text variant='bigHead'>{getCreatedName(currentOrderDetails)}</Text>
				<Text variant='bigHead' color='primary'>
					# {orderNumber}
				</Text>
			</Box>
			<Dashed />
			<FlatList
				style={{
					flex: 1,
					paddingHorizontal: spacing.xl,
				}}
				data={orderItems}
				renderItem={({ item, index }: any) => {
					return <OrderDetailsItem {...{ data: item }} />;
				}}
				keyExtractor={(item, index) => index.toString()}
			/>
			<Dashed />
			<Box px='xl' flexDirection='row' justifyContent='space-between' alignItems='center'>
				<Text variant='bigHead'>{t('Total')}</Text>
				<Text variant='bigHead'>
					{formatCurrency(getRestaurantCurrency(restaurant), total)}
				</Text>
			</Box>
			<Box pt='xl' px='xl' flexDirection='row' alignItems='center'>
				<Button
					alignItems='center'
					width='100%'
					height={60}
					variant='primary'
					onPress={() => {}}>
					<Text variant='heading' color='white'>
						{t('Done All')}
					</Text>
				</Button>
			</Box>
		</Box>
	);
};

export default CurrentOrderDetails;
