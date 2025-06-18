'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Code } from 'lucide-react'

const links = [
  { href: '/prerequisites', label: 'Prerequisites' },
  { href: '/patterns', label: 'Patterns' },
  { href: '/questions', label: 'Questions' },
  { href: '/roadmap', label: 'Roadmap' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              DSA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Master
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors font-medium ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
