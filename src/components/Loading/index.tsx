import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { Chase } from 'react-native-animated-spinkit';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Theme } from '~theme';

interface LoadingProps {
	color?: string;
	size?: number;
}

const Loading = ({ color, size }: LoadingProps) => {
	const { colors } = useTheme<Theme>();
	return (
		<Animated.View
			{...{
				entering: FadeIn,
				exiting: FadeOut,
			}}>
			<Chase size={size ?? 30} color={color ?? colors.primary} />
		</Animated.View>
	);
};

export default Loading;
