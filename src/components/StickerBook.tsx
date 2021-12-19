import img from '../assets/megaBall.webp'

export const StickerBook: React.FC = () => {
	return (
		<div>
			<img
				src={img}
				style={{ maxWidth: '90%' }}
				alt="Megaball"
				width={3402}
			/>
		</div>
	)
}
