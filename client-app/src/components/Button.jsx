import React from 'react';

const Button = ({ className, text, loading, onClick }) => (
  <button className={`btn ${className}`} onClick={onClick} disabled={loading} title={text}>
    {text}
  </button>
)

export { Button };
