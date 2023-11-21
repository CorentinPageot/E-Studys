'use client'

import { ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemesPrivoder } from 'next-themes'

const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
  return (
    <NextThemesPrivoder {...props}>{children}</NextThemesPrivoder>
  )
}

export default ThemeProvider

