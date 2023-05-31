import React from 'react'
import Button from './Button'
let ButtonItems = ["All", "Mixes", "Computer", "Music", "Live", "Computers", "Startups", "Apple", "Gadgets", "AI", "Podcasts", "Stocks"]

const ButtonList = () => {
    return (
        <div className='flex justify-around'>
            {ButtonItems.map((buttonTitle, index) => {
                return <Button key={index} title={buttonTitle} />
            })}
        </div>
    )
}

export default ButtonList