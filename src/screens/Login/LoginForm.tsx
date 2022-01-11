import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@redux-requests/react';
import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Box from '~components/Box';
import Button from '~components/Button';
import Input from '~components/Input';
import Text from '~components/Text';
import { loginTablet } from '~store/apiActions/Auth';
import { Theme } from '~theme';

interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
	const { t } = useTranslation();
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	const [email, setEmail] = useState('mariam_goodwin@gmail.com');
	const [password, setPass] = useState('Q@th3na!');
	const { spacing, colors } = useTheme<Theme>();
	const { loading = false }: any = useQuery({ type: loginTablet });

	return (
		<Box width='100%' alignItems='center'>
			<Input
				editable={!loading}
				activeColor={'white'}
				inactiveColor={'white'}
				label={t('E-mail')}
				style={{ marginTop: spacing.m, width: '100%' }}
				value={email}
				onChangeText={(str: string) => setEmail(str)}
			/>
			<Input
				editable={!loading}
				activeColor={'white'}
				inactiveColor={'white'}
				label={t('Password')}
				style={{ marginTop: spacing.m, width: '100%' }}
				secureTextEntry
				value={password}
				onChangeText={(str: string) => setPass(str)}
			/>

			<Button
				width={120}
				m='l'
				variant='primary'
				loading={loading}
				onPress={() =>
					dispatch(
						loginTablet({
							email,
							password,
						}),
					).then(({ data = {} }: any) => {
						const { profile = {} } = data;
						const { restaurant = {} } = profile;
						if (restaurant.id) {
							// dispatch(getCurrentRestaurant(restaurant.id)).then(
							// 	(restaurantInfo: any) => {
							// dispatch(setFloor(first(restaurantInfo.floors)));
							// },
							// );
						}
					})
				}>
				<Text variant='heading' color='white'>
					{t('Login')}
				</Text>
			</Button>
		</Box>
		// <Form onFinish={onFinish}>
		// 	<Field name='username'>
		// 		<TextInput placeholder='Username' />
		// 	</Field>
		// 	<Field name='password'>
		// 		<TextInput placeholder='Password' />
		// 	</Field>

		// 	<button>Submit</button>
		// </Form>
	);
};

export default LoginForm;
