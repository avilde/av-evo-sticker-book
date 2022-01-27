import { GameType, PageType } from '../consts'
import dreamCatcherLeftPath from './backgrounds/dreamCatcherLeft.png'
import dreamCatcherRightPath from './backgrounds/dreamCatcherRight.png'
import megaballLeftPath from './backgrounds/megaballLeft.png'
import megaballRightPath from './backgrounds/megaballRight.png'

import blackJackLogoPath from './logos/blackJackLogo.png'
import cashOrCrashLogoPath from './logos/cashOrCrashLogo.png'
import crapsLogoPath from './logos/crapsLogo.png'
import crazyTimeLogoPath from './logos/crazyTimeLogo.png'
import dreamCatcherLogoPath from './logos/dreamCatcherLogo.png'
import gonzoLogoPath from './logos/gonzoLogo.png'
import holdemLogoPath from './logos/holdemLogo.png'
import lightningDiceLogoPath from './logos/lightningDiceLogo.png'
import megaBallLogoPath from './logos/megaBallLogo.png'
import monopolyLogoPath from './logos/monopolyLogo.png'
import rouletteLogoPath from './logos/rouletteLogo.png'
import sicBoLogoPath from './logos/sicBoLogo.png'
import { PartialRecord } from '../types'

export const imagePathMapping: PartialRecord<`${GameType}${PageType}`, string> =
	{
		[`${GameType.DreamCatcher}${PageType.Left}`]: dreamCatcherLeftPath,
		[`${GameType.DreamCatcher}${PageType.Right}`]: dreamCatcherRightPath,
		[`${GameType.Megaball}${PageType.Left}`]: megaballLeftPath,
		[`${GameType.Megaball}${PageType.Right}`]: megaballRightPath,
	}

export const logoPathMapping: Record<GameType, string> = {
	[GameType.BlackJack]: blackJackLogoPath,
	[GameType.CashOrCrash]: cashOrCrashLogoPath,
	[GameType.Craps]: crapsLogoPath,
	[GameType.CrazyTime]: crazyTimeLogoPath,
	[GameType.DreamCatcher]: dreamCatcherLogoPath,
	[GameType.Gonzo]: gonzoLogoPath,
	[GameType.Holdem]: holdemLogoPath,
	[GameType.LighteningDice]: lightningDiceLogoPath,
	[GameType.Megaball]: megaBallLogoPath,
	[GameType.Monopoly]: monopolyLogoPath,
	[GameType.Roulette]: rouletteLogoPath,
	[GameType.SicBo]: sicBoLogoPath,
}
