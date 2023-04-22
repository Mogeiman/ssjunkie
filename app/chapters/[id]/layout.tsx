// import Navbar from './components/Navbar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='bg-slate-200'>
        {children}
    </div>
  )
}