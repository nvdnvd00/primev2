import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@redux-requests/react';
import { useTheme } from '@shopify/restyle';
import Box from 'components/Box';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Theme } from 'src/theme';
import { loginTablet } from 'store/apiActions/Auth';

interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
	const navigation = useNavigation();
	const dispatch = useDispatch<any>();
	const { data } = useQuery({ type: loginTablet });
	const [email, setEmail] = useState('');
	const [password, setPass] = useState('');
	const { spacing, colors } = useTheme<Theme>();
	return (
		<Box width='100%' alignItems='center'>
			<Input
				style={{ marginTop: spacing.m, width: '100%' }}
				placeholder='email'
				value={email}
				onChangeText={(str: string) => setEmail(str)}
			/>
			<Input
				style={{ marginTop: spacing.m, width: '100%' }}
				placeholder='password'
				secureTextEntry
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
							email: 'duc.nguyen@saigonvalley.com',
							password: 'Neos@1996',
						}),
					).then((res: any) => {
						console.log({ data: res.data });
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
