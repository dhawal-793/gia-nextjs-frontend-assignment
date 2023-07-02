import Navbar from './Navbar'
import FeaturedBanks from './FeaturedBanks'
import FeaturedCompanies from './FeaturedCompanies'

const Header = () => {
    return (
        <>
            <div className='fixed top-0 w-screen'>
                <Navbar />
                <FeaturedBanks />
                <FeaturedCompanies />
            </div>
            <div className="h-[84px] sm:h-[171.2px]"></div>
        </>
    )
}

export default Header