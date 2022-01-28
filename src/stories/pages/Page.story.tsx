import { Story } from '@storybook/react'
import {
	PageComponent,
	PageComponentProps,
} from '../../components/page/page/Page'
import { GameType, PageType } from '../../consts'
import { noop } from 'lodash-es'

interface PageStoryProps {
	pageType: PageType
	gameType: GameType
}

export const PageStory: Story<PageStoryProps> = ({ pageType, gameType }) => {
	const props: PageComponentProps = {
		currentPage: 0,
		setCurrentPage: noop,
		index: 2,
		zIndex: 1,
		stickers: [],
		gameType,
		pageType,
	}

	return (
		<div
			className="relative"
			style={{
				width: 'calc(var(--page-width) * 2)',
				height: 'var(--page-height)',
			}}
		>
			<PageComponent {...props} />
		</div>
	)
}
PageStory.args = {
	pageType: PageType.Left,
	gameType: GameType.Megaball,
}
PageStory.argTypes = {
	pageType: {
		control: { type: 'select' },
		options: Object.values(PageType),
	},
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
PageStory.storyName = 'Page'
