import { useRef, useState } from "react";

function Slider({ length, setLength }) {
    const maxlength = 15;
    const trackRef = useRef(null);
    const [active, setActive] = useState(false);
    const handleDrag = (e) => {
        let tract = trackRef.current
        const rect = tract.getBoundingClientRect();
        let x = e.clientX - rect.left;
        if (x < 0) {
            x = 0;
        } else if (x > rect.width) {
            console.log(rect.width)
            x = rect.width;
        }
        const percent = (x / rect.width) * 100;
        setLength((percent));
    }
    function startDrag() {
        window.addEventListener('mousemove', handleDrag);
        window.addEventListener('mouseup', stopDrag)
    }
    function stopDrag() {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', stopDrag);
        setActive(false)
    }
    const handleClick = (e) => {
        console.log('ahdoi')
        const track = trackRef.current;
        const rect = track.getBoundingClientRect()
        let x = e.clientX - rect.left;
        const cramp = Math.max(0, Math.min(x, rect.width));
        console.log(rect.width)
        const percent = (cramp / rect.width) * 100;
        setLength(percent);
    }
    return (
        <div className="length-container">
            <div className="length-title">
                <span className='text-preset-4 new-text-preset-3 text-grey-200'>Character Length</span>
                <span className='text-preset-2 new-text-preset-1 text-green-200'>{Math.floor(maxlength * length / 100)}</span>
            </div>
            <div className="slider-container">
                <div className="track" ref={trackRef} onClick={handleClick}>
                    <div className="filled-track bg-green-200" style={{ width: `${length}% `, height: '100%' }}></div>
                    <div></div>
                </div>
                <div className={`oval ${active ? 'oval-active' : ''}`} style={{ left: `${length}%` }} onMouseDown={(e) => {
                    e.stopPropagation();
                    setActive(true);
                    startDrag()
                }}></div>
            </div>
        </div>
    )
}
export default Slider;