import { imagePathMapping } from '../../assets/images'
import { GameType } from '../../consts'

export interface PageProps {
	pageNumber: number
	isEvenPage: boolean
	gameType: GameType
}

export const Page: React.FC<PageProps> = ({
	isEvenPage,
	pageNumber,
	gameType,
}) => {
	return (
		<div className="mx-auto">
			<img className="" src={imagePathMapping[gameType]} alt={gameType} />

			<div className="">{pageNumber}</div>
		</div>
	)
}
