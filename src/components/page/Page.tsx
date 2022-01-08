import styles from './Page.pcss'
import cn from 'classnames'

export interface PageProps {
	pageNumber: number
	isEvenPage: boolean
	imagePath: string
}

export const Page: React.FC<PageProps> = ({
	isEvenPage,
	pageNumber,
	imagePath,
}) => {
	return (
		<div className={styles.pageContainer}>
			<img
				className={cn(styles.image, {
					[styles.isEvenPage]: isEvenPage,
				})}
				src={imagePath}
				alt={imagePath}
			/>

			<div className={styles.pageNumber}>{pageNumber}</div>
		</div>
	)
}
