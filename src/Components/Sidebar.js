import React from 'react'
import MenuItems from './MenuItems'

const Sidebar = () => {
    return (
        <div>
            {/* <Link to={"/"}><MenuItems Icon={HomeIcon} item={"Home"} /></Link> */}
            <MenuItems item={"Shorts"} />
            <MenuItems item={"Subscriptions"} />
            <MenuItems item={"Originals"} />
            <MenuItems item={"YouTube Music"} />
            <hr className='border border-spacing-2 bg-black ml-3'></hr>
            <MenuItems item={"Library"} />
            <MenuItems item={"History"} />
            <MenuItems item={"Your videos"} />
            <MenuItems item={"Watch Later"} />
            <MenuItems item={"Downloads"} />
            <MenuItems item={"Liked videos"} />
            <hr className='border border-spacing-2 bg-black ml-3'></hr>
            <h2 className='font-bold text-xl ml-3'>Explore</h2>
            <MenuItems item={"Trending"} />
            <MenuItems item={"Shopping"} />
            <MenuItems item={"Music"} />
            <MenuItems item={"News"} />

        </div>
    )
}

export default Sidebar