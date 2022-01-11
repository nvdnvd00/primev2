import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Box from '~components/Box';
import FastImage from '~components/FastImage';
import Loading from '~components/Loading';
import Text from '~components/Text';
import { AppIcons } from '~config';
import { Theme } from '~theme';

interface OrderDetailItemProps {}

const OrderDetailItem = (props: OrderDetailItemProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const active = false;
	const avtSize = 34;
	const status = Math.floor((Math.random() * 10) / 3);
	return (
		<Box
			mb='l'
			p='m'
			borderRadius='l'
			height={50}
			width='100%'
			flexDirection='row'
			alignItems='center'
			bg={active ? 'primary' : 'none'}>
			<FastImage
				uri={`https://i.pravatar.cc/300?t=${Math.random()}`}
				style={{ width: avtSize, height: avtSize, borderRadius: borderRadii.m }}
			/>
			<Box flex={1} justifyContent='space-between' px='m'>
				<Text variant='heading' fontWeight='bold' color={'black'}>
					Jane Đu
				</Text>
				{/* <Box>
					<Text variant='body' color={'primary'}>
						{Math.floor(Math.random() * 10 + 1)} item
					</Text>
				</Box> */}
			</Box>
			<Box flex={0.5} m='s'>
				<Text variant='heading' color={'disabled'}>
					x{Math.floor(Math.random() * 10 + 1)}
				</Text>
			</Box>
			<Box flex={0.5} ml='s' alignItems='flex-end'>
				{status === 0 ? null : status === 1 ? (
					<Loading />
				) : (
					<AppIcons name={'Tick-Square'} size={30} color={colors.green} />
				)}
			</Box>
		</Box>
	);
};

export default OrderDetailItem;

const styles = StyleSheet.create({
	container: {},
});
