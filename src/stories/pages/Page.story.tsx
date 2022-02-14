import { Story } from '@storybook/react'
import {
	PageComponent,
	PageComponentProps,
} from '../../components/page/page/Page'
import { GameType, PageType } from '../../consts'
import { noop } from '../../utils/commonUtils'

interface PageStoryProps {
	pageType: PageType
	gameType: GameType
}

export const PageStory: Story<PageStoryProps> = ({ pageType, gameType }) => {
	const isLeftPage = pageType === PageType.Left
	const props: PageComponentProps = {
		currentPage: isLeftPage ? 1 : 0,
		setCurrentPage: noop,
		index: isLeftPage ? 1 : 2,
		zIndex: isLeftPage ? 0 : 1,
		stickers: [],
		gameType,
		pageType,
		setDragTarget: noop,
		selectedStickerNr: -1,
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
	gameType: GameType.BlackJack,
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
