import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '800'],
})

export const metadata: Metadata = {
  title: 'Notifications Page',
  description: 'A simple notifications page made with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${jakarta.className} text-body bg-neutral-lightGrayishBlue1 flex flex-col items-center justify-center`}
      >
        {children}
      </body>
    </html>
  )
}
