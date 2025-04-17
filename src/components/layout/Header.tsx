'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'

const navigation = [
  { name: 'BUSINESS', href: '/business' },
  { name: 'FACILITIES', href: '/facilities' },
  { name: 'ABOUT US', href: '/about-us' },
  { name: 'RECRUIT', href: '/recruit' },
  { name: 'CONTACT', href: '/contact' },
]

const capabilities = [
  { name: '技術力', href: '/capabilities/technical' },
  { name: '開発力', href: '/capabilities/development' },
  { name: '製品力', href: '/capabilities/product' },
  { name: '人間力', href: '/capabilities/human' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'jp' | 'en'>('jp')

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#003087]/90">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">KODAKA</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">メニューを開く</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          {capabilities.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === 'jp' ? 'en' : 'jp')}
            className="flex items-center text-sm font-semibold text-white hover:text-gray-300"
          >
            <Globe className="mr-1 h-4 w-4" />
            {language.toUpperCase()}
          </button>
        </div>
      </nav>
      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#003087] px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-white">KODAKA</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">メニューを閉じる</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {capabilities.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => setLanguage(language === 'jp' ? 'en' : 'jp')}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    <div className="flex items-center">
                      <Globe className="mr-1 h-4 w-4" />
                      {language.toUpperCase()}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 