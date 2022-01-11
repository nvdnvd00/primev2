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
import { TouchableOpacity } from 'react-native';
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
} as LayoutProps<Theme>;

const Button = ({ loading, children, ...props }: BtnProps) => {
	const { colors } = useTheme<Theme>();
	let p = props;
	if (loading) {
		p.disabled = true;
		p.width = 40;
		p.borderRadius = 'circle';
	}
	return (
		<Btn {...{ ...defaultProps, ...p }}>
			{loading ? <Loading size={30} color={colors.white} /> : children}
		</Btn>
	);
};

export default Button;
