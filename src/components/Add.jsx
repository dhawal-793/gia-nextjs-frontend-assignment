'use client'
import { FiPlus } from 'react-icons/fi'

const Add = () => {
    const handleAddClick = (e) => {
        e.preventDefault();
        // Do something

    }
    return (
        <div onClick={handleAddClick} className='fixed grid w-12 h-12 text-white rounded-full cursor-pointer sm:w-14 sm:h-14 bottom-20 right-8 sm:bottom-14 sm:right-12 bg-blue-primary place-items-center'>
            <FiPlus className='w-8 h-8' />
        </div>
    )
}

export default Add