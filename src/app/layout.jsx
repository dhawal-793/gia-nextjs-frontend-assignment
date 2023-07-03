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
          <div className='h-[50px] xxs:h-[68px] xs:h-8 sm:h-0'/>
        </>
        <BottomMenu />
        <Add />
      </body>
    </html>
  )
}
