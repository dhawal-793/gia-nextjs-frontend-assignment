import Navbar from './Navbar'
import FeaturedBanks from './FeaturedBanks'
import FeaturedCompanies from './FeaturedCompanies'

const Header = () => {
    return (
        <>
            <div className='fixed top-0 z-50 w-screen'>
                <Navbar />
                <FeaturedBanks />
                <FeaturedCompanies />
            </div>
            <div className="h-[140px] sm:h-[171.2px]"/>
        </>
    )
}

export default Header