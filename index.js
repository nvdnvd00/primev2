/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
if (__DEV__) {
	import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
LogBox.ignoreLogs(['Module RCTImageLoader', 'Require cycle:', 'Remote debugger', 'Animated']);

AppRegistry.registerComponent(appName, () => App);
