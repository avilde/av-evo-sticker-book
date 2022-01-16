import { PageType } from '../consts'
import dreamCatcherBackgroundPath from './backgrounds/dreamCatcherBackground.png'
import megaballBackgroundPath from './backgrounds/megaballBackground.png'
import coverPath from './backgrounds/cover.png'

export const imagePathMapping: Record<string, string> = {
	[PageType.Cover]: coverPath,
	[PageType.DreamCatcher]: dreamCatcherBackgroundPath,
	[PageType.Megaball]: megaballBackgroundPath,
}
