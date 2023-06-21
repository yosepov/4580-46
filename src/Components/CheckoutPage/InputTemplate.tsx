import React, { ChangeEvent } from 'react'
import "./InputTemplate.css"

interface Props {
    label: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputTemplate = ({label, value, onChange} : Props) => {
  return (
    <div className="inputContainer">
    <input name="input" placeholder=" " type="input" className="inputEl" value={value} onChange={onChange} />
    <label htmlFor="input" className="inputLab">{label}</label>
    </div>
  )
}

export default InputTemplate