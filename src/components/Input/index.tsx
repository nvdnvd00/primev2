import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Theme } from '~theme';
import Box from '../Box';
import Label from './Label';

const Input = ({ style = {}, label, ...props }: TextInputProps & { label?: string }) => {
	const { spacing, colors } = useTheme<Theme>();
	const [focused, setFocused] = useState(false);
	return (
		<Box style={style}>
			{label ? <Label focused={focused}>{label}</Label> : null}
			<TextInput
				onBlur={() => {
					setFocused(false);
				}}
				onFocus={() => {
					setFocused(true);
				}}
				style={[
					{
						height: 40,
						borderWidth: StyleSheet.hairlineWidth,
						borderColor: focused ? colors.primary : colors.disabled,
						borderRadius: spacing.m,
						padding: spacing.m,
					},
				]}
				{...props}
			/>
		</Box>
	);
};

export default Input;
