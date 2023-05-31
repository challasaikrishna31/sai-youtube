import React from 'react'

const Header = () => {
    return (
        <div className='flex shadow-lg justify-between p-2'>
            <div className='flex'>
                <img alt='menu-icon'
                    src='https://www.svgrepo.com/show/313139/hamburger-menu.svg' className='h-8' />
                <img alt='youtube logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' className='h-8 mx-1' />
            </div>

            <div className='flex'>
                <input type="text" placeholder='search' className="border border-gray-300 w-96 rounded-l-full px-3 py-1 h-8" />
                <img alt='search icon'
                    src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png' className='border border-gray-300 rounded-r-full px-3 py-1 h-8' />
            </div>
            <div className='flex'>
                <img alt='user icon'
                    src='https://cdn-icons-png.flaticon.com/512/709/709722.png' className='h-8 mx-1' />
            </div>

        </div>
    )
}

export default Header