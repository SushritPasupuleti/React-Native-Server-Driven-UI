import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

export function HomeScreen() {
	return (
		<View className="flex-1 items-center justify-center p-3 bg-white dark:bg-slate-800">
			<H1 className='text-slate-900 dark:text-white'>React Native SDUI</H1>
			<View className="max-w-xl">
				<P className="text-center text-slate-500 dark:text-slate-400">
					Using Server Driven UI to render Components from a URL.
				</P>
			</View>
			<View className="h-[32px]" />
			<Row className="space-x-8">
				<TextLink href="/user/test-user">Load SDUI with this Link</TextLink>
			</Row>
		</View>
	)
}
