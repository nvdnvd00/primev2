import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import Text from '~components/Text';
import { Theme } from '~theme';

const Label = ({ children, focused, activeColor, inactiveColor }: any) => {
	const { colors } = useTheme<Theme>();

	return (
		<Text variant='inputLabel' color={focused ? activeColor : inactiveColor} mb='s'>
			{children}
		</Text>
	);
};

export default Label;
