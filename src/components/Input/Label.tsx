import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import Text from '~components/Text';
import { Theme } from '~theme';

const Label = ({ children, focused }: any) => {
	const theme = useTheme<Theme>();
	return (
		<Text variant='inputLabel' mb='s' color={!focused ? 'disabled' : 'primary'}>
			{children}
		</Text>
	);
};

export default Label;
