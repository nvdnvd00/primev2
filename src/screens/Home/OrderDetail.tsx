import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Box from '~components/Box';
import Button from '~components/Button';
import OrderDetailItem from '~components/OrderDetailItem';
import Text from '~components/Text';
import { Theme } from '~theme';
import { appBorderWidth } from '~utils/constants';

interface OrderDetailProps {
	name?: string;
}

const OrderDetail = ({ name = 'John Đu' }: OrderDetailProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const { t } = useTranslation();
	const Dashed = () => (
		<Box
			m='xl'
			borderWidth={appBorderWidth}
			borderStyle='dashed'
			height={appBorderWidth / 3}
			borderColor='sky'
		/>
	);
	return (
		<Box flex={1} bg='white'>
			<Text variant='bigHead' px='xl'>
				{t('Details')}
			</Text>
			<Dashed />
			<Box flexDirection='row' justifyContent='space-between' px='xl'>
				<Text variant='bigHead'>{name}</Text>
				<Text variant='bigHead' color='primary'>
					# 132
				</Text>
			</Box>
			<Dashed />
			<FlatList
				style={{
					flex: 1,
					paddingHorizontal: spacing.xl,
				}}
				data={[1, 2, 3, 4, 5, 6, 7, 8]}
				renderItem={({ item, index }: any) => {
					return <OrderDetailItem />;
				}}
				keyExtractor={(item, index) => index.toString()}
			/>
			<Dashed />
			<Box px='xl' flexDirection='row' justifyContent='space-between' alignItems='center'>
				<Text variant='bigHead'>Total</Text>
				<Text variant='bigHead'>${Math.floor(Math.random() * 1000)}</Text>
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

export default OrderDetail;
