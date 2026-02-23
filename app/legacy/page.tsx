import { Metadata } from 'next'
import LegacyContent from '@/components/LegacyContent'

export const metadata: Metadata = {
  title: 'Legacy & Impact | Chief Mike Adenuga',
  description: 'Explore Mike Adenuga\'s lasting impact on African business, infrastructure development, indigenous ownership, and continental prosperity.',
  openGraph: {
    title: 'Legacy & Impact',
    description: 'Building African-led enterprises and continental prosperity',
  },
}

export default function Legacy() {
  return <LegacyContent />
}
