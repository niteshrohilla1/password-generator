import check from '../../assets/icon-check.svg'
import { useState } from 'react'
function CheckList({ checkedBoxes, handleClick }) {
    const data = {
        1: 'Include Uppercase Letters',
        2: 'Include Lowercase Letters',
        3: 'Include Numbers',
        4: 'Include Symbols'
    }
    
    return (
        <div className="check-list-container">
            {Object.entries(data).map(([key, value]) =>
                <div key={key} className="check-list">
                    <div className={`check-box ${checkedBoxes.includes(key) ? 'check-box-active' : ''}`} onClick={() => handleClick(key,value)}>
                        <img src={check} alt="" className={`${checkedBoxes.includes(key) ? '' : 'hide'}`} />
                    </div>
                    <span className='text-preset-4 new-text-preset-3 text-grey-200'>{value}</span>
                </div>
            )}
        </div>
    )
}

export default CheckList;