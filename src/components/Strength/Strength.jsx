function Strength({checkedBoxes}) {
    return (
        <div className="strength-container">
            <span className='text-preset-4 new-text-preset-3 text-grey-600'>STRENGTH</span>
            <div className="strength-boxes">
                <div className={`strength-box ${checkedBoxes.length>0?'box-filled':''}`}></div>
                <div className={`strength-box ${checkedBoxes.length>1?'box-filled':''}`}></div>
                <div className={`strength-box ${checkedBoxes.length>2?'box-filled':''}`}></div>
                <div className={`strength-box ${checkedBoxes.length>3?'box-filled':''}`}></div>
            </div>
        </div>
    )
}
export default Strength;