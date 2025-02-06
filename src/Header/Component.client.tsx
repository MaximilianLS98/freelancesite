'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { CMSLink } from '@/components/Link'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { SearchIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'


interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const SheetComponent = (
    <Sheet>
      <SheetTrigger className="absolute left-5 top-5">
        <ArrowRight className="w-5 text-foreground" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-6">
          <SheetTitle>Maximilian Skjønhaug</SheetTitle>
          <SheetDescription>
            Her kan du finne lenker til tidligere prosjekter, blogginnlegg og annet innhold.
          </SheetDescription>
        </SheetHeader>
        <h2 className="my-2">Meny</h2>
        <nav className="flex flex-row flex-wrap gap-3 items-center">
          {data.navItems &&
            data.navItems.map(({ link }: any, i) => {
              return <CMSLink key={i} {...link} appearance="link" />
            })}
          <Link href="/posts">
            <span className="sr-only">Innlegg</span>
            <span className="hover:underline">Innlegg</span>
          </Link>
          <Link href="/projects">
            <span className="sr-only">Prosjekter</span>
            <span className="hover:underline">Prosjekter</span>
          </Link>
          <Link href="/freelance">
            <span className="sr-only">Freelance</span>
            <span className="hover:underline">Freelance</span>
          </Link>
          <Link href="/search">
            <span className="sr-only">Søk</span>
            <SearchIcon className="w-5 text-primary" />
          </Link>
        </nav>
        <div id="SheetFooter" className="absolute bottom-10">
          <nav className="flex gap-4 items-center">
            <Link href="https://www.github.com/maximilianls98" target="_blank" className='flex gap-1'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.563 4.936.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Github</span>
              <span className="hover:underline">Github</span>
            </Link>
            <Link href="https://www.linkedin.com/in/maximilianls/" target="_blank" className='flex gap-1'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-5"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3.5v-11h3.5v11zm-1.75-12.25c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm13.75 12.25h-3.5v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3.5v-11h3.5v1.5c.896-1.104 2.239-1.5 3.5-1.5 2.761 0 5 2.239 5 5v6.5z"
                clipRule="evenodd"
              />
            </svg>
              <span className="sr-only">LinkedIn</span>
              <span className="hover:underline">LinkedIn</span>
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      {/* <div className="py-4 flex justify-between"> */}
        {/* <Link href="/"> */}
          {/* <Logo loading="eager" priority="high" className="invert dark:invert-0" /> */}
          {/* <span className="text-7xl font-bold">Logo MLS</span> */}
        {/* </Link> */}
        {SheetComponent}
        {/* <HeaderNav data={data} /> */}
      {/* </div> */}
    </header>
  )
}


