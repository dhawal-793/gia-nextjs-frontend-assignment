
import { getFeaturedCompanies } from "@/utils/fetchFeaturedCompanies";

import Image from "next/image";


const FeaturedCompanies = async () => {

    const featuredCompanies = await getFeaturedCompanies();

    return (
        <div className="z-40 w-full bg-gray-primary">
            <h3 className="hidden sm:block p-[0.1rem] pl-4 text-lg font-bold text-[#C9454F] uppercase w-fit">Featured Companies</h3>
            <div className="w-full  sm:bg-[#e7f0fb] h-fit  overflow-x-scroll whitespace-nowrap scrollbar-hidden">
                <div className="flex gap-5 px-3 py-1 sm:gap-8 w-fit animate-scroll">
                    {
                        featuredCompanies?.length > 0 &&
                        featuredCompanies.map((company, i) => {
                            return (
                                <div key={company.name} className="relative z-20 flex items-center justify-center w-12 h-12 overflow-hidden border-2 border-red-500 rounded-full sm:w-24 sm:border-none sm:rounded-none">
                                    <div className="relative w-24 h-10 -z-10 bg-[#F4F4F4] sm:bg-[#e7f0fb]">
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