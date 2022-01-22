import { Story } from '@storybook/react'
import { Page, PageProps } from '../components/page/Page'
import { GameType, Other, PageType } from '../consts'
import { noop } from 'lodash-es'
import { imagePathMapping } from '../assets/images'

interface PageStoryProps {
	isOddPage: boolean
	background: PageType
}

export const PageStory: Story<PageStoryProps> = ({
	isOddPage,
	background = GameType.DreamCatcher,
}) => {
	const props: PageProps = {
		isTurned: !isOddPage,
		isEven: !isOddPage,
		isOdd: isOddPage,
		isCover:
			background === Other.FrontCover || background === Other.BackCover,
		setCurrentPage: noop,
		index: 1,
		zIndex: 1,
		backgroundImage: imagePathMapping[background],
	}

	return (
		<div
			style={{
				position: 'relative',
				width: 'calc(var(--page-width) * 2)',
				height: 'var(--page-height)',
			}}
		>
			<Page {...props} />
		</div>
	)
}
PageStory.args = {
	isOddPage: true,
}
PageStory.argTypes = {
	background: {
		control: { type: 'select' },
		options: Object.values({ ...Other, ...GameType }),
	},
}
PageStory.storyName = 'Page'
