import { Metadata } from 'next'
import BusinessesContent from '@/components/BusinessesContent'

export const metadata: Metadata = {
  title: 'Business Portfolio | Mike Adenuga',
  description: 'Explore Mike Adenuga\'s business empire spanning telecommunications, energy, and strategic investments across Africa.',
  openGraph: {
    title: 'Business Portfolio',
    description: 'Leading enterprises transforming African industries',
  },
}

export default function Businesses() {
  return <BusinessesContent />
}
