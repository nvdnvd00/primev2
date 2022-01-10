import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '~components/Box';
import LoginForm from './LoginForm';

const LoginScreen: React.FC<any> = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	return (
		<Box
			flex={1}
			flexDirection='row'
			alignItems='center'
			justifyContent='center'
			backgroundColor='white'>
			<Box flex={1}>{/*  */}</Box>
			<Box flex={1} padding='l'>
				<LoginForm />
			</Box>
		</Box>
	);
};
export default LoginScreen;
