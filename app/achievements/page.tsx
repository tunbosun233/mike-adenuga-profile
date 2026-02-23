import { Metadata } from 'next'
import AchievementsContent from '@/components/AchievementsContent'

export const metadata: Metadata = {
  title: 'Achievements & Legacy | Mike Adenuga',
  description: 'Honors, awards, and continental impact of Mike Adenuga - GCON, France Legion of Honour, Africa\'s leading billionaire entrepreneur.',
  openGraph: {
    title: 'Achievements & Legacy | Mike Adenuga',
    description: 'Recognition and impact across Africa',
  },
}

export default function AchievementsPage() {
  return <AchievementsContent />
}
