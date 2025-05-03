import { useState } from 'react'
import './App.css'
import Input from './Input/Input'

function App() {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  return (
    <>
      <div className="card">
        <Input
          error={error}
          value={value}
          onChange={e => {
            if (e.target.value === "") {
              setError("Please enter some value so that input doesn't get empty");
            }
            else {
              setError("")
            }
            setValue(e.target.value)
          }}
        />
        <button
          onClick={() => {
            if (value === "") {
              setError("Please enter some value so that input doesn't get empty");
            }
          }}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default App
