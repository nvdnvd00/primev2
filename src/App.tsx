import { ThemeProvider } from '@shopify/restyle';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import theme from '~theme';
import i18nextInstance from '~translations';
import Navigator from './Navigator';
import store from './store';

const App = () => {
	useEffect(() => {
		i18nextInstance.changeLanguage('en-US');
	}, []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<I18nextProvider i18n={i18nextInstance}>
						<Navigator />
					</I18nextProvider>
				</ThemeProvider>
			</Provider>
		</GestureHandlerRootView>
	);
};

export default App;
