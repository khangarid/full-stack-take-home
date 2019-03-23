import React from 'react';

import { EntriesTable, EntriesForm, EntriesChart } from '../containers';

const Home = () => {
  return (
    <React.Fragment>
      <h1>Water flow and pressure</h1>
      <EntriesForm />
      <EntriesTable />
      <EntriesChart />
    </React.Fragment>
  )
}

export { Home };
