import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useState } from 'react';
import FImage, { Source } from 'react-native-fast-image';
import Box from '~components/Box';
import Loading from '~components/Loading';
import { Theme } from '~theme';

const FastImage = ({ uri, resizeMode, ...rest }: any) => {
	const { colors } = useTheme<Theme>();
	const [loading, setLoading] = useState(false);
	let source: Source = {
		uri: uri ?? 'https://i.pravatar.cc/300',
		// headers: { Authorization: 'someAuthToken' },
		// priority: FImage.priority.normal,
	};

	return (
		<FImage
			onLoadStart={() => {
				setLoading(true);
			}}
			onLoadEnd={() => {
				setLoading(false);
			}}
			source={source}
			resizeMode={resizeMode ?? FImage.resizeMode.contain}
			{...rest}>
			{loading ? (
				<Box justifyContent='center' alignItems='center' flex={1}>
					<Loading color={colors.primary} />
				</Box>
			) : null}
		</FImage>
	);
};
export default FastImage;
