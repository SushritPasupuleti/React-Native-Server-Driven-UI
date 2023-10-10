import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

export function HomeScreen() {
	return (
		<View className="flex-1 items-center justify-center p-3">
			<H1>React Native SDUI</H1>
			<View className="max-w-xl">
				<P className="text-center">
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
