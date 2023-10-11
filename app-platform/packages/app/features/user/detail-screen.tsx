import { createParam } from 'solito'
import { View } from 'app/design/view'
import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { createWormhole } from 'react-native-wormhole';

const { useParam } = createParam<{ id: string }>()

const { Wormhole } = createWormhole({
	global: {
		require: (moduleId: string) => {
			if (moduleId === 'react') {
				return require('react');
			} else if (moduleId === 'react-native' || moduleId === 'react-native-web') {
				return require('react-native');
			} /* else if (moduleId === 'react-native-webview') {
				return require('react-native-webview');
			} */
			return null;
		},
	},
	verify: async () => true,
});

export function UserDetailScreen() {
	const [id] = useParam('id')

	return (
		<View className="flex-1 items-center justify-center p-3 bg-white dark:bg-slate-800">
			<H1 className='text-slate-900 dark:text-white'>React Native SDUI</H1>
			<View className="max-w-xl">
				<P className="text-center text-slate-500 dark:text-slate-400">{`User ID: ${id}`}</P>
			</View>
			<View className="h-[32px]" />
			<Wormhole source={{ uri: 'http://localhost:5000/Profile.jsx' }} />;
			<View className="h-[32px]" />
			<Row className="space-x-8">
				<TextLink href="/">
					🏠 Go Home
				</TextLink>
			</Row>
		</View>
	)
}
