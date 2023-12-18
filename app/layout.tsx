import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import LogoImage from '@/public/logo.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TodoList',
  description: 'Small Todo List project created with Next.js',
}

const links = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/todos', label: 'Todos', key: 'todos' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white antialiased">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={`${inter.className} flex h-screen flex-col`}>
        <header className="py-10 h-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-start items-center md:gap-x-12">
              <Link href="/" className="flex flex-row items-center gap-x-2">
                <Image src={LogoImage} alt="Logo" />
                <span className="text-xl">TodoList</span>
              </Link>
              <div className="hidden md:flex md:gap-x-6">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer className="h-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
              <div className="flex gap-x-6">
                <Link className="group" href={'twitter.com'} target="blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  />
                </Link>
                <Link className="group" href={'twitter.com'} target="blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  />
                </Link>
                <Link className="group" href={'twitter.com'} target="blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  />
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                Ut enim ad minima veniam
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
