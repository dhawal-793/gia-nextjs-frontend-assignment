'use client'

import { GoBellFill } from 'react-icons/go'
import { FaUser } from 'react-icons/fa'
import { BsFillChatSquareTextFill } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi'


//  More data can be added like links is, etc.
const SidebarLinks = [
    {
        name: "Sentiments"
    },
    {
        name: "Market"
    },
    {
        name: "Sector"
    },
    {
        name: "Watchlist"
    },
    {
        name: "Events"
    },
    {
        name: "News/Interview"
    }
]

const Sidebar = ({ menuOpen, setMenuOpen, currentPage, setCurrentPage }) => {
    return (
        <>
            <div className={`fixed z-40 top-[140px] sm:top-[171.2px] left-0 w-60 sidebar-min-height bg-blue-primary text-white duration-300 transition-transform overflow-y-scroll ${menuOpen ? "translate-x-0" : "-translate-x-60"}`}>
                <div className="flex items-center justify-between px-5 py-4 border-b cursor-pointer border-b-white/30">
                    <div className='flex items-center gap-3'>
                        <FaUser className="w-6 h-6" />
                        <span>Hello, User</span>
                    </div>
                    <GoBellFill className='w-6 h-6' />
                </div>
                <nav className='py-2'>
                    <ul>
                        <li onClick={() => setCurrentPage("discussion")} className={`relative z-10 flex items-center gap-2 px-4 py-[10px] cursor-pointer ${currentPage === "discussion" && "bg-blue-secondary"}`}>
                            <BsFillChatSquareTextFill className='w-4 h-4' />
                            <div className='pb-1'>Disscussion Forum</div>
                            <div className="absolute inset-y-0 grid right-2 place-items-center">
                            <BiSolidDownArrow className='w-2 h-2 ' />
                            </div>
                        </li>
                        <li onClick={() => setCurrentPage("market")} className={`flex items-center gap-2 px-4 py-[10px] cursor-pointer ${currentPage === "market" && "bg-blue-secondary"}`}>
                            <AiFillDollarCircle className='w-4 h-4' />
                            <div className='pb-1'>Market Stories</div>
                        </li>
                        {SidebarLinks.map(link => (
                            <li key={link.name} className="w-full px-10 py-[10px] cursor-pointer ">{link.name}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <button onClick={() => setMenuOpen(prev => !prev)} className={`z-40 text-white fixed grid w-3 h-14 sm:w-5 sm:h-20 bg-blue-primary place-items-center bottom-1/3 -translate-y-full transition-all duration-300 ${menuOpen ? "left-60" : "left-0"} rounded-r-[0.2rem] sm:rounded-r-md`}>
                <BiSolidRightArrow className='w-3 h-3 sm:w-4 sm:h-4 p-[1px]' />
            </button>
        </>
    )
}

export default Sidebar


