import { createTheme } from '@shopify/restyle';
import colors from '../config/colors.json';
import textVariants from './TextVariants';
import touchableVariants from './TouchableVariants';
// https://www.color-meanings.com/shades-of-gray-color-names-html-hex-rgb-codes/
const theme = createTheme({
	colors: {
		...colors,
		none: 'transparent',
	},
	spacing: {
		none: 0,
		xs: 2,
		s: 4,
		m: 8,
		l: 16,
		xl: 24,
		xxl: 32,
	},
	zIndices: {
		'0': 0,
		'1': 1,
		'99': 99,
		header: 99,
		modal: 999,
	},
	borderRadii: {
		s: 4,
		m: 8,
		l: 16,
		xl: 24,
		circle: 9999,
	},
	breakpoints: {},
	textVariants,
	touchableVariants,
});
export type Theme = typeof theme;
export default theme;
