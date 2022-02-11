import cn from 'classnames'
import React from 'react'

interface SeedProps {
	seed: string
	setNewSeed: (seed: number) => void
}

export const Seed: React.FC<SeedProps> = ({ seed, setNewSeed }) => {
	const [enableInput, setEnableInput] = React.useState(false)

	return (
		<div
			className={cn(
				'seed',
				'w-30 h-6 my-2',
				'text-[12px] text-black',
				'flex justify-center items-center shrink-0'
			)}
			onClick={() => setEnableInput(true)}
		>
			<div className="flex mr-2 text-gray-400">Seed:</div>
			{enableInput ? (
				<input
					className="flex w-20 h-6 text-[12px] border border-gray-200 rounded-md"
					type="text"
					onBlur={(event) => {
						setNewSeed(+event.target.value)
						setEnableInput(false)
					}}
					defaultValue={seed}
					onKeyDown={(event) => {
						if (event.key === 'Enter') {
							event.preventDefault()
							setNewSeed(+event.currentTarget.value)
							setEnableInput(false)
						}
					}}
				></input>
			) : (
				<div className="flex text-gray-400">{seed}</div>
			)}
		</div>
	)
}
