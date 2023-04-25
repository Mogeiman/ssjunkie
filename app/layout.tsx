import './globals.css'
import
 { Analytics } 
from
 
'@vercel/analytics/react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Providers from './redux/provider'
export const metadata = {
  title: 'Shadow Slave Junkie',
  description: `Read the latest chapter of shadow slave. Author: Guilty three. Summary: Growing up in poverty, Sunny never expected anything good from
  life. However, even he did not anticipate being chosen by the
  Nightmare Spell and becoming one of the Awakened - an elite
  group of people gifted with supernatural powers.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9086453152549847"
     crossOrigin="anonymous"></script>
     <meta name="monetag" content="33430c2f7ca6ffa352c78a7e56a83a3b"></meta>
     <script data-cfasync="false" type="text/javascript" src='./adScript.js'>

     </script>
     
      </head>
      <body className='bg-slate-200 overflow-x-hidden'>
      <Providers>
        <Navbar />
        {children}
        <Analytics />
      <Footer />
      </Providers>
      
        </body>

    </html>
  )
}
