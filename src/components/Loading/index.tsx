import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { Chase } from 'react-native-animated-spinkit';
import { Theme } from '~theme';

interface LoadingProps {
	color?: string;
	size?: number;
}

const Loading = ({ color, size }: LoadingProps) => {
	const { colors } = useTheme<Theme>();
	return <Chase size={size ?? 30} color={color ?? colors.primary} />;
};

export default Loading;
