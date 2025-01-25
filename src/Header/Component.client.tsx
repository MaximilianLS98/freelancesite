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
      <SheetTrigger className='absolute left-5 top-5'>
        <ArrowRight className="w-5 text-foreground" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-3 items-center">
          {data.navItems && data.navItems.map(({ link }: any, i) => {
            return <CMSLink key={i} {...link} appearance="link" />
          })}
          <Link href="/posts">
            <span className="sr-only">Posts</span>
            <span>Posts</span>
          </Link>
          <Link href="/projects">
            <span className="sr-only">Projects</span>
            <span>Projects</span>
          </Link>
          <Link href="/freelance">
            <span className="sr-only">Freelance</span>
            <span>Freelance</span>
          </Link>
          <Link href="/search">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 text-primary" />
          </Link>
        </nav>
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


