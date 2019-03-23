import React, { useState } from "react";

import { Line, defaults } from "react-chartjs-2";

const EntriesChart = ({ data }) => {
  // Expands or collapses chart
  const [expanded, setExpanded] = useState(false);

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
    <div
      className={`chart ${expanded ? "chart--expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
      title="Click to zoom in"
    >
      <Line data={data} options={options} />
    </div>
  );
};

export { EntriesChart };
