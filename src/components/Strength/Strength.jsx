function Strength({ checkedBoxes }) {
    const data = {
        0: '',
        1: 'EASY',
        2: 'MEDIUM',
        3: 'MEDIUM',
        4: 'HARD'
    }
    return (
        <div className="strength-container">
            <span className='text-preset-4 new-text-preset-3 text-grey-600'>STRENGTH</span>
            <div className="strength-wrapper">
                <span className="text-preset-2 text-grey-200">{data[checkedBoxes.length]}</span>
                <div className="strength-boxes">
                    <div className={`strength-box ${checkedBoxes.length > 0 ? 'box-filled' : ''}`}></div>
                    <div className={`strength-box ${checkedBoxes.length > 1 ? 'box-filled' : ''}`}></div>
                    <div className={`strength-box ${checkedBoxes.length > 2 ? 'box-filled' : ''}`}></div>
                    <div className={`strength-box ${checkedBoxes.length > 3 ? 'box-filled' : ''}`}></div>
                </div>
            </div>
        </div>
    )
}
export default Strength;