import frontCoverImagePath from '../../assets/backgrounds/frontCover.png'
import backCoverImagePath from '../../assets/backgrounds/backCover.png'

import './Page.css'

export interface CoverPageProps {
	/** Front or back cover of sticker book */
	isFrontCover?: boolean
}

export const CoverPage: React.FC<CoverPageProps> = ({ isFrontCover }) => {
	const imageSrc = !!isFrontCover ? frontCoverImagePath : backCoverImagePath

	return (
		<div className="page">
			<img className="" src={imageSrc} alt={imageSrc} />
		</div>
	)
}
