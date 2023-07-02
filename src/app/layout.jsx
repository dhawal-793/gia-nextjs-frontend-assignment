import Add from '@/components/Add'
import './globals.css'
import BottomMenu from '@/components/BottomMenu'
import Header from '@/components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative w-screen bg-gray-primary'>
        <Header />
        {children}
        <BottomMenu />
        <Add />
      </body>
    </html>
  )
}
