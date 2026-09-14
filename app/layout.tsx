import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Veloura Motors — The Art of the Drive',
  description: 'A private showroom for the rare, the remarkable, and the beautifully engineered.',
}

export const viewport: Viewport = { themeColor: '#292b27', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
