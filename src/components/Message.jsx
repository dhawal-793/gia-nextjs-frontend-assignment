'use client'
import Image from "next/image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";

const formateTime = (timestamp) => {
    // calculate time according to timestamp
    const time = "2 min ago"
    return time;
}


const Message = ({ message, filters }) => {
    const [liked, setLiked] = useState(false)
    const LikeIcon = liked ? AiFillHeart : AiOutlineHeart
    return (
        <div className="relative w-full p-2 bg-white rounded-md shadow-lg sm:px-4">
            {message.image !== "" &&
                <div className="w-full px-12 py-3">
                    <img src={message.image} alt="message image" className="w-full h-auto mix-blend-multiply" />
                </div>
            }
            <div className="flex items-start gap-2">
                <div className="w-fit">
                    <div className="relative w-10 h-10 rounded-full">
                        <Image fill src={message.author.image} alt={`${message.author.name}'s profile picture`} />
                    </div>
                </div>
                <div className="flex-1 pt-1 mr-4 xxs:mr-8 xs:mr-6">
                    <div className="flex items-center gap-3">
                        <h5 className="text-sm font-bold capitalize">{message.author.name}</h5>
                        <div className={`w-16 grid place-items-center h-[24.6px] text-white text-xs font-semibold rounded-full ${filters[message.sector - 1].color}`} key={filters[message.sector - 1].name}>{filters[message.sector - 1].name}</div>
                    </div>
                    <div className="my-2 text-sm ">
                        {message.text}
                    </div>
                    <div className="flex items-center justify-between mr-2 font-semibold text-black">
                        <div className="flex items-center gap-[2px] cursor-pointer" onClick={() => setLiked(prev => !prev)}>
                            <LikeIcon className={`w-4 h-4 xxs:w-5 xxs:h-5 ${liked && "text-red-500"}`} />
                            <span className="text-xs">{message.likes}</span>
                        </div>
                        <div className="flex items-center gap-[2px] cursor-pointer">
                            <AiOutlineEye className="w-4 h-4 xxs:h-5 xxs:w-5 " />
                            <span className="text-xs">{message.views}</span>
                        </div>
                        <div className="flex items-center gap-[2px] cursor-pointer">
                            <FiMessageSquare className="w-4 h-4 xxs:h-5 xxs:w-5 " />
                            <span className="text-xs">{message.likes}</span>
                        </div>
                        <div className="flex items-center gap-[2px] cursor-pointer">
                            <BiShareAlt className="w-4 h-4 xxs:h-5 xxs:w-5 " />
                            <span className="text-xs">Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute text-sm top-2 right-3 text-[#648BBE]">{formateTime(message.timestamp)}</div>
        </div>
    )
}

export default Message