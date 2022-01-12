import { useTheme } from '@shopify/restyle';
import { differenceInMinutes, format, getUnixTime } from 'date-fns';
import * as React from 'react';
import { Trans } from 'react-i18next';
import { Image } from 'react-native';
import Box from '~components/Box';
import Button from '~components/Button';
import FastImage, { ResizeMode } from '~components/FastImage';
import Text from '~components/Text';
import { AppIcons, AppImages } from '~config';
import { Theme } from '~theme';
import { appBorderWidth } from '~utils/constants';
import { getCreatedName, getOverDueTime } from '~utils/orderHelper';

interface OrderCardProps {
	onSelect?: (data: any) => void;
	data?: any;
	active?: boolean;
}

const OrderCard = ({ onSelect, data, active }: OrderCardProps) => {
	const { spacing, borderRadii, colors } = useTheme<Theme>();
	const cardHeight = 120;
	const avtSize = cardHeight - spacing.m * 2;
	//
	const {
		placedTime = getUnixTime(new Date()),
		createdBy = {},
		id,
		orderItems = [],
		orderNumber,
	} = data;
	const duration = differenceInMinutes(getOverDueTime(data), new Date());
	return (
		<Button
			onPress={() => {
				if (onSelect instanceof Function) onSelect(id);
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
			{!!createdBy?.avatar ? (
				<FastImage
					uri={createdBy?.avatar}
					style={{ width: avtSize, height: avtSize, borderRadius: borderRadii.l }}
					resizeMode={ResizeMode.cover}
				/>
			) : (
				<Image
					source={AppImages.DefaultUser}
					style={{
						width: avtSize,
						height: avtSize,
						borderRadius: borderRadii.l,
						resizeMode: 'cover',
					}}
				/>
			)}
			<Box flex={1} height='100%' justifyContent='space-between' p='m'>
				<Box>
					<Text variant='caption' color={active ? 'white' : 'black'}>
						{format(new Date(placedTime * 1000), 'MMM d, h:mm aa')}
					</Text>
					<Text
						variant='heading'
						fontWeight='bold'
						color={active ? 'white' : 'black'}
						mt='s'>
						{getCreatedName(data)}
					</Text>
				</Box>
				<Box>
					<Text variant='body' color={active ? 'white' : 'primary'}>
						<Trans i18nKey='{{count}} item' count={orderItems.length} />
					</Text>
				</Box>
			</Box>
			<Box width={100} height='100%' justifyContent='space-between' alignItems='flex-end'>
				<Text variant='body' color={active ? 'white' : 'black'}>
					{orderNumber}
				</Text>
				<Box ml='m' flexDirection='row' alignItems='center' justifyContent='flex-end'>
					<Box
						width={35}
						height={35}
						borderRadius='m'
						bg='none'
						justifyContent='center'
						alignItems='center'
						m='none'>
						<AppIcons
							name='Time-Circle'
							size={25}
							color={active ? colors.white : colors.primary}
						/>
					</Box>
					<Text variant='caption' color={active ? 'white' : 'primary'}>
						{duration >= 0 ? `${duration}m` : '0m'}
					</Text>
				</Box>
			</Box>
		</Button>
	);
};

export default OrderCard;
