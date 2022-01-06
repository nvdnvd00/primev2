import {
	backgroundColor,
	BackgroundColorProps,
	BorderProps,
	createRestyleComponent,
	createVariant,
	layout,
	LayoutProps,
	opacity,
	OpacityProps,
	PositionProps,
	shadow,
	ShadowProps,
	spacing,
	SpacingProps,
	spacingShorthand,
	SpacingShorthandProps,
	VariantProps,
} from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';
import { Theme } from 'src/theme';

type BtnProps = VariantProps<Theme, 'touchableVariants'> &
	SpacingShorthandProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	PositionProps<Theme> &
	OpacityProps<Theme> &
	BackgroundColorProps<Theme> &
	BorderProps<Theme> &
	ShadowProps<Theme> &
	React.ComponentProps<typeof TouchableOpacity> & {
		children?: any;
	};

const Button = createRestyleComponent<BtnProps, Theme>(
	[
		spacingShorthand,
		spacing,
		layout,
		opacity,
		backgroundColor,
		shadow,
		createVariant({ themeKey: 'touchableVariants' }),
	],
	TouchableOpacity,
);
export default Button;
