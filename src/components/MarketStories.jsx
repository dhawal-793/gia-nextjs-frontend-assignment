import Image from "next/image"
import Heading from "./Heading"

const MarketStories = ({ stories }) => {
    return (
        <div className={`w-full p-3 max-w-[468px] mx-auto sm:max-w-full h-full pl-5 sm:pl-0 lg:pl-1`}>
            <Heading>Market Stories</Heading>
            <div className={`pt-[36px] grid w-full xxs:w-96 sm:w-64 md:w-72 lg:w-full mx-auto grid-cols-1 gap-4 lg:grid-cols-2 pl-[2px] xs:pl-2 lg:pl-3`}>
                {stories.map(({ image, story }, ind) => (
                    <div key={image + ind} className={`w-full mx-auto rounded-lg aspect-[4/3] relative `}>
                        <Image fill src={image} alt="Market Story" className="rounded-lg opacity-60" />
                        <div className="absolute inset-0 flex flex-col rounded-lg">
                            <div className="flex-1"></div>
                            <p className="px-4 pb-1 text-sm font-semibold leading-4 h-fit ">{story}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarketStories