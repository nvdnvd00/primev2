import { useNavigation } from '@react-navigation/native';
import { resetRequests } from '@redux-requests/core';
import React from 'react';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Box from '~components/Box';
import Button from '~components/Button';
import Text from '~components/Text';
import { loginTablet } from '~store/apiActions/Auth';

const HomeScreen: React.FC<any> = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();

	return (
		<Box flex={1} alignItems='center' justifyContent='center' backgroundColor='white'>
			<Text variant='heading' color='blue' textDecorationLine='underline'>
				<Trans i18nKey='Home Screen'>Home Screen</Trans>
			</Text>
			<Button
				variant='primary'
				bg='green'
				onPress={() => dispatch(resetRequests([loginTablet]))}>
				<Text variant='heading' color='white'>
					Log Out
				</Text>
			</Button>
		</Box>
	);
};
export default HomeScreen;
