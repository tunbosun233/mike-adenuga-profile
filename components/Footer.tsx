import Link from 'next/link'
import { LinkedinIcon, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-4">Mike Adenuga</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Visionary entrepreneur shaping Africa's economic landscape through innovation and
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="text-muted-foreground hover:text-accent transition-colors">
                  Businesses
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-accent transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Legacy
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-primary mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Information
                </Link>
              </li>
              <li>
                <a href="https://www.gloworld.com/ng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  Globacom
                </a>
              </li>
              <li>
                <a href="https://conoilplc.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  Conoil
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/conoil-plc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-primary transition-all flex items-center justify-center" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com/GloWorld" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-primary transition-all flex items-center justify-center" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 Chief Mike Adenuga. All rights reserved.</p>
          <p>Crafted with excellence and vision</p>
        </div>
      </div>
    </footer>
  )
}
