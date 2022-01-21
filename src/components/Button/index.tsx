import {
	backgroundColor,
	BackgroundColorProps,
	backgroundColorShorthand,
	BackgroundColorShorthandProps,
	border,
	BorderProps,
	createRestyleComponent,
	createVariant,
	layout,
	LayoutProps,
	opacity,
	OpacityProps,
	position,
	PositionProps,
	shadow,
	ShadowProps,
	spacing,
	SpacingProps,
	spacingShorthand,
	SpacingShorthandProps,
	useTheme,
	VariantProps,
} from '@shopify/restyle';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';
import Loading from '~components/Loading';
import { Theme } from '~theme';

type BtnProps = VariantProps<Theme, 'touchableVariants'> &
	BackgroundColorProps<Theme> &
	BackgroundColorShorthandProps<Theme> &
	BorderProps<Theme> &
	LayoutProps<Theme> &
	OpacityProps<Theme> &
	PositionProps<Theme> &
	ShadowProps<Theme> &
	SpacingProps<Theme> &
	SpacingShorthandProps<Theme> &
	React.ComponentProps<typeof TouchableOpacity> & {
		children?: any;
		loading?: boolean;
	};

const Btn = createRestyleComponent<BtnProps, Theme>(
	[
		backgroundColor,
		backgroundColorShorthand,
		border,
		layout,
		opacity,
		shadow,
		spacing,
		spacingShorthand,
		position,
		createVariant({ themeKey: 'touchableVariants' }),
	],
	TouchableOpacity,
);
const defaultProps = {
	activeOpacity: 1,
	height: 40,
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 'm',
	minWidth: 40,
	p: 'm',
	entering: FadeIn,
	layout: Layout,
} as LayoutProps<Theme>;
const AnimatedBtn = Animated.createAnimatedComponent(Btn);

const Button = ({ loading, children, ...props }: BtnProps) => {
	const [BtnLoading, setBtnLoading] = useState(loading);
	const { colors } = useTheme<Theme>();
	let p = props;
	if (loading) {
		p.disabled = true;
		p.width = 40;
		p.borderRadius = 'circle';
	}
	useEffect(() => {
		loading
			? setBtnLoading(loading)
			: setTimeout(() => {
					setBtnLoading(loading);
			  }, 100);
	}, [loading]);
	return (
		<AnimatedBtn {...{ ...defaultProps, ...p }}>
			{BtnLoading ? <Loading size={30} color={colors.white} /> : children}
		</AnimatedBtn>
	);
};

export default Button;
