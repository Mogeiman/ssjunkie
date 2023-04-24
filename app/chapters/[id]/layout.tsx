// import Navbar from './components/Navbar'

export const metadata = {
  title: 'Shadow Slave',
  description: 'Shadow Slave',
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
