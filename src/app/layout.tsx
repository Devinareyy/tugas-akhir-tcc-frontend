import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import 'material-symbols'

const inter = Plus_Jakarta_Sans({ 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Simple Notes',
  description: 'Simple Notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col py-4 px-4 md:py-12 xl:px-64 lg:px-48 md:px-24 sm:px-12">
          {children}
        </main>
      </body>
    </html>
  )
}
