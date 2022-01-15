import { Story } from '@storybook/react'
import {
	StickerBook,
	StickerBookProps,
} from '../components/stickerBook/StickerBook'

export const StickerBookStory: Story<StickerBookProps> = (props) => {
	return (
		<div>
			<StickerBook {...props} />
		</div>
	)
}
StickerBookStory.args = {}
StickerBookStory.storyName = 'Sticker book'
