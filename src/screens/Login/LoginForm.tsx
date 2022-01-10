import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '~components/Box';
import Button from '~components/Button';
import Input from '~components/Input';
import Text from '~components/Text';
import { loginTablet } from '~store/apiActions/Auth';
import { getRestaurantDetail } from '~store/apiActions/Restaurant';
import { Theme } from '~theme';

interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	const [email, setEmail] = useState('mariam_goodwin@gmail.com');
	const [password, setPass] = useState('Q@th3na!');
	const { spacing, colors } = useTheme<Theme>();
	return (
		<Box width='100%' alignItems='center'>
			<Input
				label='Email'
				style={{ marginTop: spacing.m, width: '100%' }}
				value={email}
				onChangeText={(str: string) => setEmail(str)}
			/>
			<Input
				label='Password'
				style={{ marginTop: spacing.m, width: '100%' }}
				secureTextEntry
				value={password}
				onChangeText={(str: string) => setPass(str)}
			/>
			<Button
				width='50%'
				alignItems='center'
				m='m'
				variant='primary'
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
							dispatch(getRestaurantDetail(restaurant.id)).then(
								(restaurantInfo: any) => {
									// rlog({ data }),
								},
							);
						}
					})
				}>
				<Text variant='heading' color='white'>
					Login
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