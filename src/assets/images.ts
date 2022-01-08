import { GameType } from '../consts'
import blackJackImagePath from './blackJack.webp'
import cashOrCrashImagePath from './cashOrCrash.webp'
import crapsImagePath from './craps.webp'
import crazyTimeImagePath from './crazyTime.webp'
import dealOrNoDealImagePath from './dealOrNoDeal.webp'
import gonzoImagePath from './gonzo.webp'
import holdemImagePath from './holdem.webp'
import lighteningDiceImagePath from './lighteningDice.webp'
import megaBallImagePath from './megaBall.webp'
import monopolyImagePath from './monopoly.webp'
import rouletteImagePath from './roulette.webp'
import sicBoImagePath from './sicBo.webp'

export const imagePathMapping: Record<GameType, string> = {
	[GameType.BlackJack]: blackJackImagePath,
	[GameType.CashOrCrash]: cashOrCrashImagePath,
	[GameType.Craps]: crapsImagePath,
	[GameType.CrazyTime]: crazyTimeImagePath,
	[GameType.DealOrNoDeal]: dealOrNoDealImagePath,
	[GameType.Gonzo]: gonzoImagePath,
	[GameType.Holdem]: holdemImagePath,
	[GameType.LighteningDice]: lighteningDiceImagePath,
	[GameType.Megaball]: megaBallImagePath,
	[GameType.Monopoly]: monopolyImagePath,
	[GameType.Roulette]: rouletteImagePath,
	[GameType.SicBo]: sicBoImagePath,
}
