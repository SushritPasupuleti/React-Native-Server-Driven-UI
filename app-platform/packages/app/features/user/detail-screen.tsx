import { createParam } from 'solito'
import { View } from 'app/design/view'
import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
	const [id] = useParam('id')

	return (
		<View className="flex-1 items-center justify-center p-3 bg-white dark:bg-slate-800">
			<H1 className='text-slate-900 dark:text-white'>React Native SDUI</H1>
			<P className="text-slate-900 dark:text-white mb-4 text-center font-bold">{`User ID: ${id}`}</P>
			<Row className="space-x-8">
				<TextLink href="/">
					🏠 Go Home
				</TextLink>
			</Row>
		</View>
	)
}
