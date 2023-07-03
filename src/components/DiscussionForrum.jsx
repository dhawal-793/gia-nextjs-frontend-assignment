import Heading from "./Heading"
import { RiSearch2Line } from "react-icons/ri"
import Message from "./Message";

const filters = [
    {
        name: "sector 1",
        color: "bg-[#AF271E]"
    },
    {
        name: "sector 2",
        color: "bg-[#2359A2]"
    },
    {
        name: "sector 3",
        color: "bg-[#ECCA5B]"
    },
]

const DiscussionForrum = ({  messages }) => {
    return (
        <div className={`w-full p-3 max-w-[468px] mx-auto sm:max-w-full sm:min-w-[428px] pl-5 sm:pl-7`}>
            <Heading>Discussion Forrum</Heading>
            <div className="pl-[2px] xs:pl-2 lg:pl-3 pb-5">
                <div className="flex flex-col gap-y-2">
                    <h4 className="text-lg font-semibold">Filters</h4>
                    <div className="flex items-start justify-between px-1 py-4 bg-white rounded-md shadow-lg xxs:px-3 md:px-5 ">
                        <div className="flex flex-wrap items-center gap-1 xxs:gap-2 max-w-fit">
                            {filters.map(({ name, color }) => (
                                <div className={`w-16 grid place-items-center h-[24.6px] text-white text-xs font-semibold rounded-full ${color}`} key={name}>{name}</div>
                            ))}
                        </div>
                        <div className=" relative w-32 ml-1 min-w-[5rem] h-fit">
                            <input className={`w-full grid place-items-center p-1 pl-6 border-[#A5A5A5]/40 outline-none border search-shadow text-xs font-semibold rounded-full bg-white md:bg-gray-secondary placeholder:pl-2`} type="text" placeholder="Search here" />
                            <button className="absolute inset-y-0 flex items-center left-1">
                                <RiSearch2Line className="w-4 h-4 " />
                            </button>
                        </div>
                    </div>
                </div>
                <div id="discussion" className="flex flex-col h-screen gap-3 my-5 sm:overflow-y-scroll sm:pr-3">
                    {messages.map(message => {
                        return <Message key={message.id} message={message} filters={filters} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default DiscussionForrum