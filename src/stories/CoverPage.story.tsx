import { Story } from '@storybook/react'
import { CoverPage, CoverPageProps } from '../components/page/CoverPage'

export const CoverPageStory: Story<CoverPageProps> = (props) => {
	return (
		<div>
			<CoverPage {...props} />
		</div>
	)
}
CoverPageStory.args = {
	isFrontCover: true,
	setIsTurned: () => {},
	isTurned: false,
	index: 0,
}
CoverPageStory.storyName = 'Cover page'
