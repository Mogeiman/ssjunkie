import './globals.css'
import
 { Analytics } 
from
 
'@vercel/analytics/react'
import { GoogleAdSense } from "nextjs-google-adsense";

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Providers from './redux/provider'
export const metadata = {
  title: 'Dhadow Slave Junkie',
  description: 'Read the latest chapter of shadow slave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang="en">
      <head>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9086453152549847"
     crossOrigin="anonymous"></script> */}
     <meta name="google-site-verification" content="ZXDfvzdLVT69YhEctmWOt4Buhnjt5sZ1I8mVkofTLkM" />
     
      </head>
      <body className='bg-slate-200 overflow-x-hidden'>
      <Providers>
        <GoogleAdSense publisherId="pub-5544517639382721" />
        <Navbar />
        {children}
        <Analytics />
      <Footer />
      </Providers>
      
        </body>

    </html>
  )
}

