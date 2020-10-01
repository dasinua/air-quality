import React, {useState} from 'react'

const SectorItem = ({sector, number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false)
    const toggleToolTip = (newValue) => {
        setDirectionSwitched(number % 3 === 0);
        setToolTipShowing(newValue);
    }
    //const toggleToolTip = () => {
        //setToolTipShowing(
            //!isToolTipShowing
        //)
    //}

    return (
        <div className="sectors__list-item" 
            onMouseEnter={() => toggleToolTip(true)}
            onMouseLeave={() => toggleToolTip(false)}
            style={{
                background: `url(${sector.imgUrl}) center no-repeat`, 
                backgroundSize: 'cover'
            }}>
        
            <p className="sectors__list-item-name">
                {sector.name}
            </p>
            {
                isToolTipShowing && <p className={`sectors__list-item-tooltip ${
                    isDirectionSwitched
                        ? "sectors__list-item-tooltip-switched"
                        : ""
                }`}>
                    {sector.description}
                </p>
            }
        </div>
    );
};

export default SectorItem
