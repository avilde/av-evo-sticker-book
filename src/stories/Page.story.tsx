import { Story } from '@storybook/react'
import { Page, PageProps } from '../components/page/Page'
import { PageType } from '../consts'
import { noop } from 'lodash-es'
import { imagePathMapping } from '../assets/images'

interface PageStoryProps {
	pageType: PageType
}

export const PageStory: Story<PageStoryProps> = ({ pageType }) => {
	const props: PageProps = {
		isTurned: false,
		isEven: false,
		isOdd: true,
		setCurrentPage: noop,
		index: 1,
		zIndex: 1,
		backgroundImage: imagePathMapping[pageType],
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
	pageType: PageType.MegaballLeft,
}
PageStory.argTypes = {
	pageType: {
		control: { type: 'select' },
		options: Object.values(PageType),
	},
}
PageStory.storyName = 'Page'
