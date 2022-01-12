import { useNavigation } from '@react-navigation/native';
import { resetRequests } from '@redux-requests/core';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import Box from '~components/Box';
import Button from '~components/Button';
import Text from '~components/Text';
import { AppIcons, AppImages } from '~config';
import { loginTablet } from '~store/apiActions/Auth';
import { Theme } from '~theme';

const LeftMenu: React.FC<any> = ({ tab, setTab }: any) => {
	const { t } = useTranslation();
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	const { colors } = useTheme<Theme>();
	const getActive = (tabCheck: any) => tab === tabCheck;
	return (
		<Box flex={1} bg='white'>
			<Box pl='l'>
				<Image
					source={AppImages.LogoAndName}
					style={{ resizeMode: 'contain', height: 50, width: '80%' }}
				/>
			</Box>
			{/*  */}
			<Box flex={1} my='xxl' alignItems='flex-start' ml='l'>
				<Button
					my='l'
					variant='primary'
					bg='none'
					flexDirection='row'
					alignItems='center'
					onPress={() => setTab(1)}>
					<AppIcons
						name={'Activity'}
						size={25}
						color={getActive(1) ? colors.primary : colors.shadow50}
					/>
					<Text
						variant='body'
						color={getActive(1) ? 'primary' : 'shadow50'}
						ml='m'
						fontWeight='bold'>
						{t('Current')}
					</Text>
				</Button>
				{/*  */}
				<Button
					my='l'
					variant='primary'
					bg='none'
					flexDirection='row'
					alignItems='center'
					onPress={() => setTab(2)}>
					<AppIcons
						name={'Calendar'}
						size={25}
						color={getActive(2) ? colors.primary : colors.shadow50}
					/>
					<Text variant='body' color={getActive(2) ? 'primary' : 'shadow50'} ml='m'>
						{t('Pre-Order')}
					</Text>
				</Button>
				{/*  */}
				<Button
					my='l'
					variant='primary'
					bg='none'
					flexDirection='row'
					alignItems='center'
					onPress={() => setTab(3)}>
					<AppIcons
						name={'Document'}
						size={25}
						color={getActive(3) ? colors.primary : colors.shadow50}
					/>
					<Text variant='body' color={getActive(3) ? 'primary' : 'shadow50'} ml='m'>
						{t('Completed	')}
					</Text>
				</Button>
				{/*  */}
				<Button
					my='l'
					variant='primary'
					bg='none'
					flexDirection='row'
					alignItems='center'
					onPress={() => setTab(4)}>
					<AppIcons
						name={'Setting'}
						size={25}
						color={getActive(4) ? colors.primary : colors.shadow50}
					/>
					<Text variant='body' color={getActive(4) ? 'primary' : 'shadow50'} ml='m'>
						{t('Settings')}
					</Text>
				</Button>
			</Box>
			{/*  */}
			<Button
				mb='xl'
				width={120}
				variant='primary'
				bg='none'
				flexDirection='row'
				alignItems='center'
				onPress={() => dispatch(resetRequests([loginTablet]))}>
				<AppIcons name={'Logout'} size={25} color={colors.red} />
				<Text variant='body' color='red' ml='m' fontWeight='bold'>
					{t('Logout')}
				</Text>
			</Button>
		</Box>
	);
};
export default LeftMenu;
