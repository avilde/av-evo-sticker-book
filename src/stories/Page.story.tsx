import { Story } from '@storybook/react'
import { Page, PageProps } from '../components/page/Page'
import { PageType } from '../consts'
import { noop } from 'lodash-es'

interface PageStoryProps {
	isOddPage: boolean
	pageType: PageType
}

export const PageStory: Story<PageStoryProps> = ({ isOddPage, pageType }) => {
	const props: PageProps = {
		isTurned: !isOddPage,
		isEven: !isOddPage,
		isOdd: isOddPage,
		setCurrentPage: noop,
		index: 1,
		zIndex: 1,
		pageType: pageType,
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
	pageType: {
		control: { type: 'select' },
		options: Object.values(PageType),
		defaultValue: PageType.DreamCatcher,
	},
}
PageStory.storyName = 'Page'
