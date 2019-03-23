import React from 'react'

const Input = ({ value, id, text, onChange, type = 'number', className, error }) => (
  <div className={`form__input-wrapper ${className && className + '-wrapper'}`}>
    <label className="form__label" htmlFor={id}>{text}</label>
    <input
      className={`form__input ${className}`}
      type={type}
      id={id}
      name={id}
      placeholder={text}
      value={value}
      onChange={onChange}
    />
    <span className="error form__input__error">
      {error}
    </span>
  </div>
)

export { Input }
