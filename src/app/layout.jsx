import Add from '@/components/Add'
import './globals.css'
import BottomMenu from '@/components/BottomMenu'
import Header from '@/components/Header'

export const metadata = {
  title: 'GIA Coding Assignment',
  description: 'Go india Advisors Coding Assignment for Next Js Fronend Developer Role',
  authors: [
    {
      name: "Dhawal Vijayvargiya",
      url: "https://dev-folio-793.vercel.app"
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative w-screen bg-gray-primary'>
        <Header />
        <>
          {children}
          <div className='h-[42px] xxs:h-[60px] xs:h-0'/>
        </>
        <BottomMenu />
        <Add />
      </body>
    </html>
  )
}
