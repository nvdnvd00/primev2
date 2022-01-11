import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Theme } from '~theme';
import Box from '../Box';
import Label from './Label';
const Input = ({
	style = {},
	label,
	activeColor = 'primary',
	inactiveColor = 'disabled',
	...props
}: TextInputProps & {
	label?: string;
	inactiveColor?: keyof Theme['colors'];
	activeColor?: keyof Theme['colors'];
	color?: keyof Theme['colors'];
}) => {
	const { spacing, colors } = useTheme<Theme>();
	const [focused, setFocused] = useState(false);
	const borderColor = focused ? colors[activeColor] : colors[inactiveColor];
	return (
		<Box style={style}>
			{label ? (
				<Label focused={focused} {...{ activeColor, inactiveColor }}>
					{label}
				</Label>
			) : null}
			<TextInput
				onBlur={() => {
					setFocused(false);
				}}
				onFocus={() => {
					setFocused(true);
				}}
				style={[
					{
						backgroundColor: colors.white,
						height: 40,
						borderWidth: StyleSheet.hairlineWidth,
						borderColor,
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
