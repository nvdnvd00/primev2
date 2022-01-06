import { NativeModules } from 'react-native';
import Reactotron, { networking, openInEditor, trackGlobalErrors } from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
Reactotron.clear();
let scriptHostname;
if (__DEV__) {
	const scriptURL = NativeModules.SourceCode.scriptURL;
	scriptHostname = scriptURL.split('://')[1].split(':')[0];
	Reactotron.configure({
		host: scriptHostname,
		name: 'React Native PRIME',
		createSocket: path => new ReactotronFlipper(path), // You can have the other options but this one at a minimum is required.
	})
		.useReactNative({
			// asyncStorage: false, // there are more options to the async storage.
			// networking: {
			//optionally, you can turn it off with false.
			// ignoreUrls: /symbolicate|generate_204/,
			// },
			// editor: false, // there are more options to editor
			// errors: { veto: stackFrame => false }, // or turn it off with false
			// overlay: false, // just turning off overlay
			// storybook: true,
		})
		.use(
			networking({
				ignoreUrls: /\/(logs|symbolicate|generate_204)$/,
			}),
		)
		.use(openInEditor())
		// .setAsyncStorageHandler(AsyncStorage)
		// .use(asyncStorage())
		.use(trackGlobalErrors())
		.connect();
}
