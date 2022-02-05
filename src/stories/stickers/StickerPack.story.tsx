import { Story } from '@storybook/react'
import noop from 'lodash-es/noop'
import { StickerPackComponent } from '../../components/stickerPack/StickerPack'

import { generateStickers } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface StickerPackStoryProps {
	isUsed: boolean
	isTurned: boolean
	randomSeed: number
}

export const StickerPackStory: Story<StickerPackStoryProps> = ({
	isTurned,
	isUsed,
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const stickers = generateStickers(random, 5)

	return (
		<div className="w-80 h-80">
			<StickerPackComponent
				stickers={stickers}
				isTurned={isTurned}
				isUsed={isUsed}
				updateStickerCount={noop}
			/>
		</div>
	)
}
StickerPackStory.args = {
	isUsed: false,
	isTurned: false,
	randomSeed: 123,
}
StickerPackStory.storyName = 'Sticker pack'
