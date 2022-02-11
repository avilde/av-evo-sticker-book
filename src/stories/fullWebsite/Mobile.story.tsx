import { Story } from '@storybook/react'
import { MobileLayout } from '../../layout/MobileLayout'

interface MobileLayoutStoryProps {}

export const MobileLayoutStory: Story<MobileLayoutStoryProps> = () => {
	return <MobileLayout />
}
MobileLayoutStory.storyName = 'Mobile'
