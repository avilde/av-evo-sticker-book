import { GameType, Other } from '../consts'
import dreamCatcherBackgroundPath from './backgrounds/dreamCatcherBackground.png'
import megaballBackgroundPath from './backgrounds/megaballBackground.png'
import frontCoverPath from './backgrounds/frontCover.png'
import backCoverPath from './backgrounds/backCover.png'

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

export const imagePathMapping: Record<string, string> = {
	[Other.FrontCover]: frontCoverPath,
	[Other.BackCover]: backCoverPath,
	[GameType.DreamCatcher]: dreamCatcherBackgroundPath,
	[GameType.Megaball]: megaballBackgroundPath,
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
