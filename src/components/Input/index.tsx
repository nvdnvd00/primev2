import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Theme } from 'src/theme';

const Input = ({ style, ...props }: TextInputProps) => {
	const { spacing, colors } = useTheme<Theme>();
	return (
		<TextInput
			style={[
				{
					height: 40,
					borderWidth: StyleSheet.hairlineWidth,
					borderRadius: spacing.m,
					padding: spacing.m,
				},
				style,
			]}
			{...props}
		/>
	);
};

export default Input;
