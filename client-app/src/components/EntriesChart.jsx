import React, { useState, useEffect } from "react";

import { Line, defaults } from "react-chartjs-2";

const EntriesChart = ({ data }) => {
  // Expands or collapses chart
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);

  let chartRef;

  useEffect(() => {
    if (chartRef) setHeight(chartRef.clientHeight);
  }, []);

  defaults.global = {
    ...defaults.global,
    defaultFontColor: "#999",
    defaultFontFamily: "Source Sans Pro"
  };

  const options = {
    legend: {
      position: "bottom"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          display: true
        }
      ]
    }
  };

  return (
    <React.Fragment>
      <div
        className={`chart ${expanded ? "chart--expanded" : ""}`}
        onClick={() => setExpanded(!expanded)}
        title="Click to expand"
        ref={el => (chartRef = el)}
      >
        <button
          className="btn chart__btn"
          onClick={() => setExpanded(!expanded)}
        >
          <span role="img" aria-label="Expand">&#x1F50D;</span>
        </button>
        <Line data={data} options={options} />
        <img className="chart__rotate-phone" alt="Rotate phone" src="/rotate_phone.gif" />
      </div>
      <div
        style={{ height: expanded ? `${height}px` : 0 }}
      />
    </React.Fragment>
  );
};

export { EntriesChart };
