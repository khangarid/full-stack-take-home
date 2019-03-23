import React, { useState } from "react";

import { Loader } from "./Loader";
import { Hint } from "./Hint";

const Table = ({
  rows,
  titles = [],
  onScrollEnd,
  loading,
  newAdded = {},
  onSort
}) => {
  const [sorted, setSorted] = useState({
    sort: Object.keys(titles)[1], // Sorted by first column by default
    order: "desc"
  });

  const renderRows = () => {
    if (!rows.length || (!loading && !rows.length)) return;

    return rows.map((row, i) => (
      <tr
        key={row.id}
        className={`dt__table__row ${
          newAdded._id === row.id ? "dt__table__row--highlight" : ""
        }`}
      >
        {Object.keys(row).map(key => {
          if (key === 'id') return null;

          return (
            <td className="dt__table__cell" key={key}>
              {row[key]}
            </td>
          )
        })}
      </tr>
    ));
  };

  const handleSort = key => {
    const sort = { sort: key };

    if (sorted.sort === key) {
      sort.order = sorted.order === "asc" ? "desc" : "asc";
    } else {
      sort.order = 'desc';
    }

    onSort(sort);
    setSorted(sort);
  };

  const renderTitles = () => (
    <tr>
      {Object.keys(titles).map(key => (
        <th
          className={`dt__table__cell dt__table__head__cell ${isSorted(key)}`}
          key={key}
          onClick={() => handleSort(key)}
          title={`Sort by ${titles[key]}`}
        >
          {titles[key]}
        </th>
      ))}
    </tr>
  );

  // Sets fixed height to table based on row height
  // Used for responsive height transition
  const getContainerStyle = () => {
    const ROW_HEIGHT = 49;
    return { height: `${(rows.length + 1) * ROW_HEIGHT}px`};
  }

  const getHintText = () => (
    <span>
      Table is <strong>responsive</strong> to size change.<br />
      <strong>Pagination</strong> enabled.<br/>
      To sort, click on <strong>column headers</strong>.
    </span>
  )

  const isSorted = (key) => {
    if (key === sorted.sort) return `dt__table__cell--${sorted.order}`;
  }

  return (
    <Hint text={getHintText()} position='left'>
      <Loader loading={loading}>
        <div className="dt container" style={getContainerStyle()}>
          <table className="dt__table">
            <thead className="dt__table__head">{renderTitles()}</thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>
      </Loader>
    </Hint>
  );
};

export { Table };
