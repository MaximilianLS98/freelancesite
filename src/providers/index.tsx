import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { SidebarProvider } from '@/components/ui/sidebar'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
          {children}
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
