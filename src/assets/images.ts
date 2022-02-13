import { GameType, PageType } from '../consts'

import blackJackLeftPath from './backgrounds/blackJackLeft.webp'
import blackJackRightPath from './backgrounds/blackJackRight.webp'
import cashOrCrashLeftPath from './backgrounds/cashOrCrashLeft.webp'
import cashOrCrashRightPath from './backgrounds/cashOrCrashRight.webp'
import cashOrCrashLeftRenderPath from './backgrounds/cashOrCrashRenderLeft.webp'
import cashOrCrashRightRenderPath from './backgrounds/cashOrCrashRenderRight.webp'
import crapsLeftPath from './backgrounds/crapsLeft.webp'
import crapsRightPath from './backgrounds/crapsRight.webp'
import crazyTimeLeftPath from './backgrounds/crazyTimeLeft.webp'
import crazyTimeRightPath from './backgrounds/crazyTimeRight.webp'
import crazyTimeLeftRenderPath from './backgrounds/crazyTimeRenderLeft.webp'
import crazyTimeRightRenderPath from './backgrounds/crazyTimeRenderRight.webp'
import dreamCatcherLeftPath from './backgrounds/dreamCatcherLeft.webp'
import dreamCatcherRightPath from './backgrounds/dreamCatcherRight.webp'
import fanTanLeftPath from './backgrounds/fanTanLeft.webp'
import fanTanRightPath from './backgrounds/fanTanRight.webp'
import gonzoLeftPath from './backgrounds/gonzoLeft.webp'
import gonzoRightPath from './backgrounds/gonzoRight.webp'
import goldenBaccaratLeftPath from './backgrounds/goldenBaccaratLeft.webp'
import goldenBaccaratRightPath from './backgrounds/goldenBaccaratRight.webp'
import lightningDiceLeftPath from './backgrounds/lightningDiceLeft.webp'
import lightningDiceRightPath from './backgrounds/lightningDiceRight.webp'
import megaballLeftPath from './backgrounds/megaBallLeft.webp'
import megaballRightPath from './backgrounds/megaBallRight.webp'
import monopolyLeftPath from './backgrounds/monopolyLeft.webp'
import monopolyRightPath from './backgrounds/monopolyRight.webp'
import rouletteLeftPath from './backgrounds/rouletteLeft.webp'
import rouletteRightPath from './backgrounds/rouletteRight.webp'
import sicBoLeftPath from './backgrounds/sicBoLeft.webp'
import sicBoRightPath from './backgrounds/sicBoRight.webp'
import twoHandHoldemLeftPath from './backgrounds/twoHandHoldemLeft.webp'
import twoHandHoldemRightPath from './backgrounds/twoHandHoldemRight.webp'

import blackJackLogoPath from './logos/blackJackLogo.webp'
import cashOrCrashLogoPath from './logos/cashOrCrashLogo.webp'
import cashOrCrashRenderLogoPath from './logos/cashOrCrashRenderLogo.webp'
import crapsLogoPath from './logos/crapsLogo.webp'
import crazyTimeLogoPath from './logos/crazyTimeLogo.webp'
import crazyTimeRenderLogoPath from './logos/crazyTimeRenderLogo.webp'
import dreamCatcherLogoPath from './logos/dreamCatcherLogo.webp'
import fanTanLogoPath from './logos/fanTanLogo.webp'
import goldenBaccaratLogoPath from './logos/goldenBaccaratLogo.webp'
import gonzoLogoPath from './logos/gonzoLogo.webp'
import lightningDiceLogoPath from './logos/lightningDiceLogo.webp'
import megaBallLogoPath from './logos/megaBallLogo.webp'
import monopolyLogoPath from './logos/monopolyLogo.webp'
import rouletteLogoPath from './logos/rouletteLogo.webp'
import sicBoLogoPath from './logos/sicBoLogo.webp'
import twoHandHoldemLogoPath from './logos/twoHandHoldemLogo.webp'

import { PartialRecord } from '../types'

// prettier-ignore
export const pagesImageMapping: PartialRecord<`${GameType}${PageType}`, string> =
	{
		[`${GameType.BlackJack}${PageType.Left}`]: blackJackLeftPath,
		[`${GameType.BlackJack}${PageType.Right}`]: blackJackRightPath,
		[`${GameType.CashOrCrash}${PageType.Left}`]: cashOrCrashLeftPath,
		[`${GameType.CashOrCrash}${PageType.Right}`]: cashOrCrashRightPath,
		[`${GameType.CashOrCrashRender}${PageType.Left}`]: cashOrCrashLeftRenderPath,
		[`${GameType.CashOrCrashRender}${PageType.Right}`]: cashOrCrashRightRenderPath,
		[`${GameType.Craps}${PageType.Left}`]: crapsLeftPath,
		[`${GameType.Craps}${PageType.Right}`]: crapsRightPath,
		[`${GameType.CrazyTime}${PageType.Left}`]: crazyTimeLeftPath,
		[`${GameType.CrazyTime}${PageType.Right}`]: crazyTimeRightPath,
		[`${GameType.CrazyTimeRender}${PageType.Left}`]: crazyTimeLeftRenderPath,
		[`${GameType.CrazyTimeRender}${PageType.Right}`]: crazyTimeRightRenderPath,
		[`${GameType.DreamCatcher}${PageType.Left}`]: dreamCatcherLeftPath,
		[`${GameType.DreamCatcher}${PageType.Right}`]: dreamCatcherRightPath,
		[`${GameType.FanTan}${PageType.Left}`]: fanTanLeftPath,
		[`${GameType.FanTan}${PageType.Right}`]: fanTanRightPath,
		[`${GameType.Gonzo}${PageType.Left}`]: gonzoLeftPath,
		[`${GameType.Gonzo}${PageType.Right}`]: gonzoRightPath,
		[`${GameType.GoldenBaccarat}${PageType.Left}`]: goldenBaccaratLeftPath,
		[`${GameType.GoldenBaccarat}${PageType.Right}`]: goldenBaccaratRightPath,
		[`${GameType.LightningDice}${PageType.Left}`]: lightningDiceLeftPath,
		[`${GameType.LightningDice}${PageType.Right}`]: lightningDiceRightPath,
		[`${GameType.Megaball}${PageType.Left}`]: megaballLeftPath,
		[`${GameType.Megaball}${PageType.Right}`]: megaballRightPath,
		[`${GameType.Monopoly}${PageType.Left}`]: monopolyLeftPath,
		[`${GameType.Monopoly}${PageType.Right}`]: monopolyRightPath,
		[`${GameType.Roulette}${PageType.Left}`]: rouletteLeftPath,
		[`${GameType.Roulette}${PageType.Right}`]: rouletteRightPath,
		[`${GameType.SicBo}${PageType.Left}`]: sicBoLeftPath,
		[`${GameType.SicBo}${PageType.Right}`]: sicBoRightPath,
		[`${GameType.TwoHandHoldem}${PageType.Left}`]: twoHandHoldemLeftPath,
		[`${GameType.TwoHandHoldem}${PageType.Right}`]: twoHandHoldemRightPath,
	}

export const logoPathMapping: Record<GameType, string> = {
	[GameType.BlackJack]: blackJackLogoPath,
	[GameType.CashOrCrash]: cashOrCrashLogoPath,
	[GameType.CashOrCrashRender]: cashOrCrashRenderLogoPath,
	[GameType.Craps]: crapsLogoPath,
	[GameType.CrazyTime]: crazyTimeLogoPath,
	[GameType.CrazyTimeRender]: crazyTimeRenderLogoPath,
	[GameType.DreamCatcher]: dreamCatcherLogoPath,
	[GameType.Gonzo]: gonzoLogoPath,
	[GameType.GoldenBaccarat]: goldenBaccaratLogoPath,
	[GameType.FanTan]: fanTanLogoPath,
	[GameType.LightningDice]: lightningDiceLogoPath,
	[GameType.Megaball]: megaBallLogoPath,
	[GameType.Monopoly]: monopolyLogoPath,
	[GameType.Roulette]: rouletteLogoPath,
	[GameType.SicBo]: sicBoLogoPath,
	[GameType.TwoHandHoldem]: twoHandHoldemLogoPath,
}
