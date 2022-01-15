import { imagePathMapping } from '../../assets/images'
import { GameType } from '../../consts'

import './Page.css'

export interface PageProps {
	pageNumber: number
	gameType: GameType
	isEvenPage: boolean
}

export const Page: React.FC<PageProps> = ({
	isEvenPage,
	pageNumber,
	gameType,
}) => {
	return (
		<div className="page">
			<img className="" src={imagePathMapping[gameType]} alt={gameType} />

			<div className="">{pageNumber}</div>
		</div>
	)
}
