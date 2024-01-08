import type { Metadata } from 'next'
import './globals.scss'
import ReduxProvider from './_redux/reduxProvider';


export const metadata: Metadata = {
  title: 'overreacted — A blog by Dan Abramov',
  description: 'A personal blog by Dan Abramov',
  icons: {
    icon: 'icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" title="overreacted">
      <ReduxProvider>
          {children}
      </ReduxProvider>
    </html>
  )
}
