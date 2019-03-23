import React from "react";

const Pagination = ({ total, current, perPage, onPageChange, onSizeChange }) => {
  const totalPages = Math.ceil(total / perPage);

  const handlePageClick = page => {
    onPageChange(page);
  };

  const handleControlClick = mod => {
    if (mod === 1 && current === totalPages) return;
    if (mod === -1 && current === 1) return;
    onPageChange(current + mod);
  };

  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`btn ${
            i === current ? "pagination__page--active" : "pagination__page"
          }`}
          onClick={() => handlePageClick(i)}
          title={`Go to page ${i}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <div className="form__input-wrapper pagination__select-wrapper" title="Select to change entries per page">
        <label className="form__label" htmlFor="size">
          Size
        </label>
        <select
          id="size"
          className="form__input pagination__select"
          onChange={e => onSizeChange(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <button
        className="btn pagination__control"
        onClick={() => handleControlClick(-1)}
        title="Previous page"
      >
        Previous
      </button>
      {renderPages()}
      <button
        className="pagination__control btn"
        onClick={() => handleControlClick(1)}
        title="Next page"
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
