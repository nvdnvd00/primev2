import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import Box from '~components/Box';
import Button from '~components/Button';
import FastImage from '~components/FastImage';
import Text from '~components/Text';
import { AppIcons } from '~config';
import { Theme } from '~theme';
import { appBorderWidth } from '~utils/constants';

interface OrderCardProps {
	onSelect?: (data: any) => void;
	data?: any;
	active?: boolean;
}

const OrderCard = ({ onSelect, data, active }: OrderCardProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const cardHeight = 120;
	const avtSize = cardHeight - spacing.m * 2;
	return (
		<Button
			onPress={() => {
				if (onSelect instanceof Function) onSelect(data);
			}}
			borderWidth={appBorderWidth}
			borderColor='sky'
			mb='xl'
			p='m'
			borderRadius='l'
			height={cardHeight}
			width='100%'
			flexDirection='row'
			alignItems='center'
			bg={active ? 'primary' : 'none'}>
			<FastImage
				uri={`https://i.pravatar.cc/300?t=${Math.random()}`}
				style={{ width: avtSize, height: avtSize, borderRadius: borderRadii.l }}
			/>
			<Box flex={1} height='100%' justifyContent='space-between' p='m'>
				<Box>
					<Text variant='smallCaption' color={active ? 'white' : 'black'}>
						May 02, 01:00 PM
					</Text>
					<Text
						variant='body'
						fontWeight='bold'
						color={active ? 'white' : 'black'}
						mt='s'>
						John Đu
					</Text>
				</Box>
				<Box>
					<Text variant='body' color={active ? 'white' : 'primary'}>
						{Math.floor(Math.random() * 10 + 1)} item
					</Text>
				</Box>
			</Box>
			<Box width={80} ml='m' flexDirection='row' alignItems='center'>
				<Box
					width={35}
					height={35}
					borderRadius='m'
					bg='none'
					justifyContent='center'
					alignItems='center'
					m='s'>
					<AppIcons
						name='Time-Square'
						size={25}
						color={active ? colors.white : colors.primary}
					/>
				</Box>
				<Text variant='smallCaption' color={active ? 'white' : 'black'}>
					{Math.floor(Math.random() * 1000)}m
				</Text>
			</Box>
		</Button>
	);
};

export default OrderCard;
