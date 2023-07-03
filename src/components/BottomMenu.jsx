'use client'

import { TbHome2 } from 'react-icons/tb'
import { CiGrid42 } from 'react-icons/ci'
import { BsUiChecks, BsUiRadiosGrid } from 'react-icons/bs'
import { RiMessage3Fill } from 'react-icons/ri'
import { useState } from 'react'


const navLinks = [
    {
        name: "menu1",
        icon: CiGrid42
    },
    {
        name: "menu2",
        icon: BsUiRadiosGrid
    },
    {
        name: "home",
        icon: TbHome2
    },
    {
        name: "message",
        icon: RiMessage3Fill
    },
    {
        name: "mark",
        icon: BsUiChecks
    }
]

const BottomMenu = () => {

    const [activeLink, setActiveLink] = useState("home")
    return (
        <nav className='fixed bottom-0 z-50 w-screen h-fit xs:hidden bg-blue-primary'>
            <ul className='flex items-center justify-center w-full text-white'>
                {navLinks.map(link => {
                    const Icon = link.icon
                    return (
                        <li key={link.name} onClick={() => setActiveLink(link.name)}
                            className={`grid place-items-center border-b-[3px] xxs:border-b-4  w-full py-3 xxs:py-4 cursor-pointer ${activeLink === link.name ? "border-b-red-500" : "border-b-transparent"}`}>
                            <Icon className='w-4 h-4 xxs:h-6 xxs:w-6' /></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BottomMenu