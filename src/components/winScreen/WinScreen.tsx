import cn from 'classnames'
import { StickerBookState } from '../../state/StickerBookState'
import { getRandomInBetween } from '../../utils/randomDataUtils'

import './WinScreen.css'

interface WinScreenProps {
	stickerBookState: StickerBookState
}

export const WinScreen: React.FC<WinScreenProps> = ({ stickerBookState }) => {
	const {
		stickerPacksAcquired,
		stickerPacksOpened,
		seed,
		stickersUsed,
		stickersLeftOver,
		setNewSeed,
		random,
	} = stickerBookState

	const winScreenClassNames = cn(
		'winScreen',
		'absolute fixed w-full h-full',
		'pointer-events-auto'
	)

	const newStickerBookClassNames = cn(
		'newStickerBook absolute bottom-24 left-[40%]',
		'ml-2 p-1 sm:py-2 sm:px-2 rounded-lg shadow-md',
		'text-white text-[8px] sm:text-sm',
		'hover:shadow-blue-300 hover:scale-105 bg-blue-500'
	)

	const listClassNames = cn(
		'list-disc',
		'absolute top-[30%] left-[35%] flex-col justify-start items-center w-62',
		'text-xl'
	)

	const onClickHandler = () => {
		setNewSeed(getRandomInBetween(random, 1, 9_999_999))
	}

	return (
		<div className={winScreenClassNames}>
			<div className="dialog absolute flex-col justify-center items-center bg-white">
				<h1 className="text-center text-bold text-4xl m-2 mb-6">
					Congratulations!
				</h1>

				<h2 className="text-center text-semibold text-2xl m-1">
					All stickers have been applied in sticker book!
				</h2>

				<ul className={listClassNames}>
					<h3 className="text-center text-semibold text-2xl mt-4 mb-2">
						Statistics
					</h3>
					<li className="item">
						Sticker packs opened: {stickerPacksOpened}
					</li>
					<li className="item">
						Sticker packs acquired: {stickerPacksAcquired}
					</li>
					<li className="item">Stickers used: {stickersUsed}</li>
					<li className="item">
						Stickers left over: {stickersLeftOver}
					</li>
				</ul>

				<button
					className={newStickerBookClassNames}
					onClick={onClickHandler}
				>
					New sticker book
				</button>

				<div className="absolute bottom-10 left-[37%]">
					Random seed: {seed}
				</div>
			</div>
		</div>
	)
}
