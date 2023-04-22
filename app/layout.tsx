import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
export const metadata = {
  title: 'Dhadow Slave Junkie',
  description: 'Read the latest chapter of shadow slave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-200 overflow-x-hidden'>
      <Navbar />
        {children}
      <Footer />
        </body>

    </html>
  )
}
