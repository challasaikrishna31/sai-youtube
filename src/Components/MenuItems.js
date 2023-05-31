import React from 'react'

const MenuItems = ({ item }) => {
    return (
        <div className='flex m-2 p-2'>
            <h3 className='text-lg'>{item}</h3>
        </div>
    )
}

export default MenuItems