import { Story } from '@storybook/react'
import { Page, PageProps } from '../components/page/Page'

export const PageStory: Story<PageProps> = (props) => {
	return (
		<div>
			<Page {...props} />
		</div>
	)
}
PageStory.args = {
	pageNumber: 1,
	isEvenPage: false,
}
PageStory.storyName = 'Page'
