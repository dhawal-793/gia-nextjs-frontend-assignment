'use client'
import { useState } from "react"
import { RiSearch2Line } from "react-icons/ri"
const SearchBox = () => {
    const [query, setQuery] = useState("")

    const handlesearch = (e) => {
        e.preventDefault()
        // Call an API to search for the query
        console.log("Searching for " + query)
    }

    return (
        <form className="relative flex-1 mx-1 my-2 rounded-[0.2rem] sm:mx-2 mr-3" onSubmit={handlesearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                className="w-full h-8 rounded-[0.2rem] bg-gray-secondary  border-[#A5A5A5]/40 border px-2 appearance-none search-shadow outline-none" />
            <button type="submit"
                className="absolute inset-y-0 flex items-center right-3">
                <RiSearch2Line className="w-5 h-5" />
            </button>
        </form>
    )
}

export default SearchBox