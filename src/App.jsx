
import './App.css'
import PasswordDisplay from './components/PasswordDisplay/passwordDisplay';
import Slider from './components/Slider/Slider';
import CheckList from './components/CheckList/CheckList';
import Strength from './components/Strength/Strength';
import Generate from './components/Generate/Generate';
import { useState } from 'react';
import { generatePassword } from './utilities/utilities';
function App() {
  const maxlength = 15;
  const [password, setPassword] = useState();
  const [length, setLength] = useState(0)
  const [checkedBoxes, setCheckedBoxes] = useState([])
  const [conditions, setConditions] = useState({
    'Include Uppercase Letters': false,
    'Include Lowercase Letters': false,
    'Include Numbers': false,
    'Include Symbols': false,
  })
  const handleClick = (index, value) => {

    if (checkedBoxes.includes(index)) {
      setConditions((prev) => ({ ...prev, [value]: false }))
      setCheckedBoxes((prev) => prev.filter((i) => i != index))
    } else {
      setConditions((prev) => ({ ...prev, [value]: true }))
      setCheckedBoxes((prev) => [...prev, index])
    }
  }
  const handleGeneratePassword = () => {

    setPassword(generatePassword(maxlength * length / 100, conditions))
  }
  return (
    <div className="main-container">
      <span className='text-preset-4 new-text-preset-2 text-grey-600'>Password Generator</span>
      <div className="password-conatiner">
        <PasswordDisplay password={password} />
        <div className="rules-wrapper">
          <div className="rules-container">
            <Slider length={length} setLength={setLength} />
            <CheckList checkedBoxes={checkedBoxes} handleClick={handleClick} />
            <div className="bottom-container">
              <Strength checkedBoxes={checkedBoxes} />
              <Generate generatePassword={handleGeneratePassword} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
