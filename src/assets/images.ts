import { GameType, PageType } from '../consts'

import dreamCatcherLeftPath from './backgrounds/dreamCatcherLeft.webp'
import dreamCatcherRightPath from './backgrounds/dreamCatcherRight.webp'
import megaballLeftPath from './backgrounds/megaballLeft.webp'
import megaballRightPath from './backgrounds/megaballRight.webp'
import crapsLeftPath from './backgrounds/crapsLeft.webp'
import crapsRightPath from './backgrounds/crapsRight.webp'
import gonzoLeftPath from './backgrounds/gonzoLeft.webp'
import gonzoRightPath from './backgrounds/gonzoRight.webp'
import rouletteLeftPath from './backgrounds/rouletteLeft.webp'
import rouletteRightPath from './backgrounds/rouletteRight.webp'

import crapsLogoPath from './logos/crapsLogo.webp'
import dreamCatcherLogoPath from './logos/dreamCatcherLogo.webp'
import gonzoLogoPath from './logos/gonzoLogo.webp'
import megaBallLogoPath from './logos/megaBallLogo.webp'
import rouletteLogoPath from './logos/rouletteLogo.webp'

import { PartialRecord } from '../types'

export const imagePathMapping: PartialRecord<`${GameType}${PageType}`, string> =
	{
		[`${GameType.DreamCatcher}${PageType.Left}`]: dreamCatcherLeftPath,
		[`${GameType.DreamCatcher}${PageType.Right}`]: dreamCatcherRightPath,
		[`${GameType.Megaball}${PageType.Left}`]: megaballLeftPath,
		[`${GameType.Megaball}${PageType.Right}`]: megaballRightPath,
		[`${GameType.Craps}${PageType.Left}`]: crapsLeftPath,
		[`${GameType.Craps}${PageType.Right}`]: crapsRightPath,
		[`${GameType.Gonzo}${PageType.Left}`]: gonzoLeftPath,
		[`${GameType.Gonzo}${PageType.Right}`]: gonzoRightPath,
		[`${GameType.Roulette}${PageType.Left}`]: rouletteLeftPath,
		[`${GameType.Roulette}${PageType.Right}`]: rouletteRightPath,
	}

export const logoPathMapping: PartialRecord<GameType, string> = {
	[GameType.Craps]: crapsLogoPath,
	[GameType.DreamCatcher]: dreamCatcherLogoPath,
	[GameType.Gonzo]: gonzoLogoPath,
	[GameType.Megaball]: megaBallLogoPath,
	[GameType.Roulette]: rouletteLogoPath,
}

// TODO: missing background images
/*
import blackJackLogoPath from './logos/blackJackLogo.webp'
import cashOrCrashLogoPath from './logos/cashOrCrashLogo.webp'
import crazyTimeLogoPath from './logos/crazyTimeLogo.webp'
import holdemLogoPath from './logos/holdemLogo.webp'
import lightningDiceLogoPath from './logos/lightningDiceLogo.webp'
import monopolyLogoPath from './logos/monopolyLogo.webp'
import sicBoLogoPath from './logos/sicBoLogo.webp'

[GameType.BlackJack]: blackJackLogoPath,
[GameType.CashOrCrash]: cashOrCrashLogoPath,
[GameType.CrazyTime]: crazyTimeLogoPath,
[GameType.Holdem]: holdemLogoPath,
[GameType.LighteningDice]: lightningDiceLogoPath,
[GameType.Monopoly]: monopolyLogoPath,
[GameType.SicBo]: sicBoLogoPath,
*/
