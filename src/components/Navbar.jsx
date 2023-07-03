import Image from "next/image"
import Link from "next/link"
import SearchBox from "./SearchBox"
import Account from "./Account"

const Navbar = () => {
    return (
        <div className="flex items-center w-full h-[52px] px-2 sm:px-3 bg-gray-primary ">
            <div className="grid px-2 pr-3 place-items-center sm:pr-7 w-fit">
                <Link href="/" className="inline-block relative w-[50px] h-[34px]">
                    <Image src="/logowithname.png" fill alt="Go India Advisiors Logo" />
                </Link>
            </div>
            <div className="flex flex-1">
                <SearchBox />
                <div className="flex items-center w-fit md:pr-2 md:gap-[0.8rem] lg:gap-5 sm:w-[38%] md:w-[42%] justify-end">
                    <Link href="/" className="hidden md:block">Contact Us</Link>
                    <Account />
                </div>
            </div>
        </div>
    )
}

export default Navbar