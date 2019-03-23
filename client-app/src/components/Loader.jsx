import React from 'react';

const Loader = ({ loading, children }) => {
  return (
    <div className={`loader-container ${loading && 'loader__container--loading'}`}>
      {children}
      {loading && <div className="loader">
        <img
          alt="loading"
          className="loader__image"
          src="/loader.gif"
        />
      </div>}
    </div>
  )
}

export { Loader };
