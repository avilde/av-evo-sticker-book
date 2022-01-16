import { Story } from '@storybook/react'
import { Page, PageProps } from '../components/page/Page'
import { PageType } from '../consts'

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
	pageType: PageType.DreamCatcher,
}
PageStory.argTypes = {
	pageType: {
		control: { type: 'select' },
		options: Object.values(PageType),
	},
}
PageStory.storyName = 'Page'
