import { Story } from '@storybook/react'
import { StickerPack } from '../../components/sticker/stickerPack/StickerPack'

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
			<StickerPack
				stickers={stickers}
				isTurned={isTurned}
				isUsed={isUsed}
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
