import React from "react";
import { connect } from "react-redux";
import { format } from 'date-fns';

import { EntriesChart as Chart } from '../components';

let EntriesChart = ({ entries, loading, newEntry }) => {

  // Format data suitable for chart.js
  const formatEntries = () => {
    const flowDataset = {
      label: 'Flow',
      data: [],
      fill: false,
      borderColor: 'red',
      backgroundColor: 'red'
    }
    const pressureDataset = {
      label: 'Pressure',
      data: [],
      fill: false,
      borderColor: 'orange',
      backgroundColor: 'orange'
    }
    const data = {
      labels: [],
      datasets: [flowDataset, pressureDataset]
    }

    entries.forEach(({ flow, pressure, timestamp }) => {
      flowDataset.data.push(flow);
      pressureDataset.data.push(pressure);
      data.labels.push(format(timestamp, 'MMM DD hh:mm'));
    });

    return data;
  }

  return (
    <Chart data={formatEntries()} />
  );
};

const mapStateToProps = ({ entries }) => ({
  entries: entries.list,
  loading: entries.loading,
  newEntry: entries.newEntry
});

EntriesChart = connect(
  mapStateToProps
)(EntriesChart);

export { EntriesChart };
