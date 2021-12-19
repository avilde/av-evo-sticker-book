import HTMLFlipBook from 'react-pageflip'

export const StickerBook: React.FC = () => {
	return (
		<HTMLFlipBook
			style={{}}
			width={300}
			height={500}
			className={''}
			startPage={0}
			size={'fixed'}
			minWidth={0}
			maxWidth={0}
			minHeight={0}
			maxHeight={0}
			drawShadow={false}
			flippingTime={0}
			usePortrait={false}
			startZIndex={0}
			autoSize={false}
			maxShadowOpacity={0}
			showCover={false}
			mobileScrollSupport={false}
			clickEventForward={false}
			useMouseEvents={false}
			swipeDistance={0}
			showPageCorners={false}
			disableFlipByClick={false}
		>
			<div className="demoPage">Page 1</div>
			<div className="demoPage">Page 2</div>
			<div className="demoPage">Page 3</div>
			<div className="demoPage">Page 4</div>
		</HTMLFlipBook>
	)
}
