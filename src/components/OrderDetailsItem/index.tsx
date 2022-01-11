import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Box from '~components/Box';
import FastImage, { ResizeMode } from '~components/FastImage';
import Loading from '~components/Loading';
import Text from '~components/Text';
import { AppIcons } from '~config';
import { Theme } from '~theme';

interface OrderDetailsItemProps {
	data?: any;
}

const OrderDetailsItem = ({ data }: OrderDetailsItemProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const active = false;
	const avtSize = 34;
	const { quantity, name, status = {}, photo } = data;
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
				uri={photo ?? `https://i.pravatar.cc/300?t=${Math.random()}`}
				style={{ width: avtSize, height: avtSize, borderRadius: borderRadii.m }}
				resizeMode={ResizeMode.cover}
			/>
			<Box flex={1} justifyContent='space-between' px='m'>
				<Text variant='heading' fontWeight='bold' color={'black'}>
					{name}
				</Text>
				{/* <Box>
					<Text variant='body' color={'primary'}>
						{Math.floor(Math.random() * 10 + 1)} item
					</Text>
				</Box> */}
			</Box>
			<Box flex={0.5} m='s'>
				<Text variant='heading' color={'disabled'}>
					x{quantity}
				</Text>
			</Box>
			<Box flex={0.5} ml='s' alignItems='flex-end'>
				{status < 3 ? null : status === 3 ? (
					<Loading />
				) : (
					<AppIcons name={'Tick-Square'} size={30} color={colors.green} />
				)}
			</Box>
		</Box>
	);
};

export default OrderDetailsItem;

const styles = StyleSheet.create({
	container: {},
});
