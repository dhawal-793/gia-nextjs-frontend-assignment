
import { getFeaturedCompanies } from "@/utils/fetchFeaturedCompanies";

import Image from "next/image";
import Heading from "./Heading";


const FeaturedCompanies = async () => {

    const featuredCompanies = await getFeaturedCompanies();

    return (
        <div className="z-10 w-full bg-gray-primary">
            <div className="pl-4"><Heading>Featured Companies</Heading></div>
            <div className="w-full  sm:bg-[#e7f0fb] h-fit  overflow-x-scroll whitespace-nowrap scrollbar-hidden">
                <div className="flex gap-5 px-3 py-1 sm:gap-8 w-fit animate-scroll">
                    {
                        featuredCompanies?.length > 0 &&
                        featuredCompanies.map((company, i) => {
                            return (
                                <div key={company.name} className="relative z-10 flex items-center justify-center w-12 h-12 overflow-hidden border-2 border-red-500 rounded-full sm:w-24 sm:border-none sm:rounded-none">
                                    <div className="-z-10 absolute w-12 sm:w-full sm:h-full h-7  bg-[#F4F4F4] sm:bg-[#e7f0fb]">
                                        <Image fill src={company.image} alt={company.name} className="-z-10 mix-blend-multiply" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedCompanies