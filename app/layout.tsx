import './global.css'
import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Alexander Zoller Portfolio',
  description: 'Alexander Zoller bio/ortfolio website showing various things about his work, education experience and other things',
  generator: 'Next.js',
  applicationName: 'Portfolio',
  keywords: ['Next.js', 'Alexander', 'Zoller', 'Portfolio'],
  creator: 'Alexander Zoller',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-gray-800',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
