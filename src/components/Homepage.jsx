'use client'

import DiscussionForrum from "@/components/DiscussionForrum"
import MarketStories from "@/components/MarketStories"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"

const HomePage = ({ messages, stories }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState("discussion")

    return (
        <main className="flex w-full overflow-x-hidden overflow-y-auto ">

            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="w-full ">
                <div className="fixed z-30 inset-x-0 top-[140px] flex w-full text-white h-fit sm:hidden">
                    <button onClick={() => setCurrentPage("discussion")} className={`w-1/2 border-b-4 grid place-items-center py-1 ${currentPage === "discussion" ? "border-b-red-500 bg-blue-secondary" : "bg-blue-primary border-b-transparent"}`}>
                        Discussion Forum
                    </button>
                    <button onClick={() => setCurrentPage("market")} className={`w-1/2 border-b-4 grid place-items-center py-1 ${currentPage === "market" ? "border-b-red-500 bg-blue-secondary" : "bg-blue-primary border-b-transparent"}`}>
                        Market Stories
                    </button>
                </div>
                <div className="w-full h-9 sm:hidden"></div>
                <div className={`block w-full sm:flex relative transition-all duration-300 sm:w-screen max-w-screen-xl mx-auto ${menuOpen ? "sm:translate-x-60" : "sm:translate-x-0"} overflow-x-hidden`}>
                    <div className={`${currentPage === "discussion" ? "block" : "hidden sm:block"} w-full sm:w-1/2 sm:min-w-[428px]`}>
                        <DiscussionForrum messages={messages} />
                    </div>
                    <div className={`${currentPage === "market" ? "block" : "hidden sm:block"} w-full sm:w-1/2`}>
                        <MarketStories stories={stories} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage