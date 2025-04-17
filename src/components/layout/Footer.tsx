'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

const navigation = {
  company: [
    { name: '会社概要', href: '/about-us' },
    { name: '事業内容', href: '/business' },
    { name: '施設紹介', href: '/facilities' },
    { name: '採用情報', href: '/recruit' },
  ],
  capabilities: [
    { name: '技術力', href: '/capabilities/technical' },
    { name: '開発力', href: '/capabilities/development' },
    { name: '製品力', href: '/capabilities/product' },
    { name: '人間力', href: '/capabilities/human' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#003087]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              KODAKA
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              最先端の製造技術と革新的なソリューションを提供
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">企業情報</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">事業内容</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.capabilities.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} KODAKA Manufacturing Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 