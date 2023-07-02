
import { getFeaturedBanks } from "@/utils/fetchFeaturedBanks";

const FeaturedBanks = async () => {
    const featuredBanks = await getFeaturedBanks();

    return (

        <div className="w-full overflow-x-scroll bg-black h-fit whitespace-nowrap scrollbar-hidden">
            <div className="flex gap-8 px-4 py-1 mx-auto w-fit animate-scroll xl:animate-none">
                {featuredBanks?.length > 0 &&
                    featuredBanks.map((bank) => {
                        return (
                            <div key={bank.name} className="flex items-center gap-8 text-white">
                                <div className="uppercase">{bank.name}</div>
                                <div>{bank.value}</div>
                                <div className={`${bank.type === "profit" ? "text-green-500" : "text-red-500"}`}>{bank.percentages}</div>
                            </div>
                        )
                    })
                }</div>
        </div>
    )

}

export default FeaturedBanks