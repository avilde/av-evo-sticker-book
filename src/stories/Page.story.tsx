import { Story } from '@storybook/react'
import { Page, PageProps } from '../components/page/Page'
import { GameType } from '../consts'

export const PageStory: Story<PageProps> = (props) => {
	return (
		<div>
			<Page {...props} />
		</div>
	)
}
PageStory.args = {
	index: 1,
	setIsTurned: () => {},
	isTurned: false,
	gameType: GameType.DreamCatcher,
}
PageStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
PageStory.storyName = 'Page'
