import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maximilian Skjønhaug - Freelance Web Developer',
  description:
    'Portfolio and freelance services of Maximilian Skjønhaug, a web developer specializing in React and Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en" suppressHydrationWarning>
    //   <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
    //   </body>
    // </html> 
  )
}
