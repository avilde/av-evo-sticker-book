import { GameType, PageType } from '../consts'

import dreamCatcherLeftPath from './backgrounds/dreamCatcherLeft.png'
import dreamCatcherRightPath from './backgrounds/dreamCatcherRight.png'
import megaballLeftPath from './backgrounds/megaballLeft.png'
import megaballRightPath from './backgrounds/megaballRight.png'
import crapsLeftPath from './backgrounds/crapsLeft.png'
import crapsRightPath from './backgrounds/crapsRight.png'
import gonzoLeftPath from './backgrounds/gonzoLeft.png'
import gonzoRightPath from './backgrounds/gonzoRight.png'
import rouletteLeftPath from './backgrounds/rouletteLeft.png'
import rouletteRightPath from './backgrounds/rouletteRight.png'

import crapsLogoPath from './logos/crapsLogo.png'
import dreamCatcherLogoPath from './logos/dreamCatcherLogo.png'
import gonzoLogoPath from './logos/gonzoLogo.png'
import megaBallLogoPath from './logos/megaBallLogo.png'
import rouletteLogoPath from './logos/rouletteLogo.png'

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
import blackJackLogoPath from './logos/blackJackLogo.png'
import cashOrCrashLogoPath from './logos/cashOrCrashLogo.png'
import crazyTimeLogoPath from './logos/crazyTimeLogo.png'
import holdemLogoPath from './logos/holdemLogo.png'
import lightningDiceLogoPath from './logos/lightningDiceLogo.png'
import monopolyLogoPath from './logos/monopolyLogo.png'
import sicBoLogoPath from './logos/sicBoLogo.png'

[GameType.BlackJack]: blackJackLogoPath,
[GameType.CashOrCrash]: cashOrCrashLogoPath,
[GameType.CrazyTime]: crazyTimeLogoPath,
[GameType.Holdem]: holdemLogoPath,
[GameType.LighteningDice]: lightningDiceLogoPath,
[GameType.Monopoly]: monopolyLogoPath,
[GameType.SicBo]: sicBoLogoPath,
*/
