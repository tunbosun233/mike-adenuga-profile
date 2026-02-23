import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Mike Adenuga',
  description: 'Get in touch with Mike Adenuga\'s office. We welcome inquiries about partnerships, media requests, and more.',
  openGraph: {
    title: 'Contact',
    description: 'Reach out to Mike Adenuga\'s office',
  },
}

export default function Contact() {
  return <ContactContent />
}
