import { createTheme } from '@shopify/restyle';
import colors from '../config/colors.json';
import textVariants from './TextVariants';
import touchableVariants from './TouchableVariants';
const palette = {
	white: '#fff',
	green: '#50B83C',
	// greenDark: '#108043',
	// greenDarker: '#173630',
	// greenLight: '#BBE5B3',
	// greenLighter: '#E3F1DF',
	// ink: '#212B36',
	// inkLight: '#454F5B',
	// inkLighter: '#637381',
	// inkLightest: '#919EAB',
	// sky: '#DFE3E8',
	// skyDark: '#C4CDD5',
	// skyLight: '#F4F6F8',
	// skyLighter: '#F9FAFB',
	// purple: '#9C6ADE',
	// purpleDark: '#50248F',
	// purpleDarker: '#230051',
	// purpleLight: '#E3D0FF',
	// purpleLighter: '#F6F0FD',
	blue: '#006FBB',
	// blueDark: '#084E8A',
	// blueDarker: '#001429',
	// blueLight: '#B4E1FA',
	// blueLighter: '#EBF5FA',
	// yellow: '#EEC200',
	// yellowDark: '#8A6116',
	// yellowDarker: '#573B00',
	// yellowLight: '#FFEA8A',
	// yellowLighter: '#FCF1CD',
	red: '#DE3618',
	// redDark: '#BF0711',
	// redDarker: '#330101',
	// redLight: '#FEAD9A',
	// redLighter: '#FBEAE5',
	// teal: '#47C1BF',
	// tealDark: '#00848E',
	// tealDarker: '#003135',
	// tealLight: '#B7ECEC',
	// tealLighter: '#E0F5F5',
	// orange: '#F49342',
	// orangeDark: '#C05717',
	// orangeDarker: '#4A1504',
	// orangeLight: '#FFC58B',
	// orangeLighter: '#FCEBDB',
	...colors,
};

const theme = createTheme({
	colors: {
		...palette,
		transparent: 'transparent',
	},
	spacing: {
		none: 0,
		xs: 2,
		s: 4,
		m: 8,
		l: 16,
		xl: 24,
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
