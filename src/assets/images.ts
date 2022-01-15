import { GameType } from '../consts'
import dreamCatcherBackgroundPath from './backgrounds/dreamCatcherBackground.png'
import megaballBackgroundPath from './backgrounds/megaballBackground.png'

export const imagePathMapping: Record<string, string> = {
	[GameType.DreamCatcher]: dreamCatcherBackgroundPath,
	[GameType.Megaball]: megaballBackgroundPath,
}
