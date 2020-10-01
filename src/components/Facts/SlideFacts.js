import React from 'react'

const SlideFacts = ({item}) => {
    return (
        <div className="facts__slide">
            <img src={item.imgUrl} alt="slide image"/>
            <p className="facts__slide-desc">
                {item.desc}
            </p>
        </div>
    )
}

export default SlideFacts
