import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Mike Adenuga | Biography & Career',
  description: 'Learn about Mike Adenuga\'s remarkable journey from humble beginnings to building a continental business empire.',
  openGraph: {
    title: 'About Mike Adenuga',
    description: 'The visionary entrepreneur shaping Africa\'s economic future',
  },
}

export default function About() {
  return <AboutContent />
}
