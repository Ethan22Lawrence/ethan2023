import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ethan Lawrence portfolio',
  description: 'Next js portfolio site of Ethan Lawrence, Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
