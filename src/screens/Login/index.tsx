import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Box from '~components/Box';
import { AppImages } from '~config';
import LoginForm from './LoginForm';

const LoginScreen: React.FC<any> = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	StatusBar.setBarStyle('light-content');
	return (
		<Box flex={1}>
			<ImageBackground
				style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
				source={AppImages.BackgroundDefault}>
				<Box style={StyleSheet.absoluteFill} bg='shadow50' />
				<Image
					source={AppImages.LogoAndName}
					style={{ resizeMode: 'contain', width: 300 }}
				/>
				<Box width={300} mt='m'>
					<LoginForm />
				</Box>
			</ImageBackground>
		</Box>
	);
};
export default LoginScreen;
