import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { fetchEntries } from "../store/entries/actions";
import { Table, Pagination } from "../components";

const TITLES = {
  num: "#",
  timestamp: "Created date",
  flow: "Flow",
  pressure: "Pressure"
};

let EntriesTable = ({
  entries,
  total,
  loading,
  fetchEntries,
  newEntry = {}
}) => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    sort: "timestamp",
    order: "desc"
  });

  useEffect(
    () => {
      fetchEntries(query);
    },
    [query.page, query.limit, query.order, query.sort, newEntry.timestamp]
  );

  useEffect(
    () => {
      setQuery({ ...query, page: 1 });
    },
    [newEntry.timestamp]
  );

  const formatEntries = () =>
    entries.map(({ _id, flow, pressure, timestamp }, i) => ({
      num: i + 1 + (query.page - 1) * query.limit,
      id: _id,
      timestamp: format(timestamp, "MMM DD hh:mm"),
      flow,
      pressure
    }));

  return (
    <React.Fragment>
      <Table
        newAdded={newEntry}
        loading={loading}
        rows={formatEntries()}
        titles={TITLES}
        onSort={({ order, sort }) => setQuery({ ...query, order, sort })}
      />
      <Pagination
        total={total}
        current={query.page}
        perPage={query.limit}
        onPageChange={p => setQuery({ ...query, page: p })}
        onSizeChange={s => setQuery({ ...query, limit: s, page: 1 })}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ entries }) => ({
  entries: entries.list,
  total: entries.total,
  loading: entries.loading,
  newEntry: entries.newEntry
});

EntriesTable = connect(
  mapStateToProps,
  { fetchEntries }
)(EntriesTable);

export { EntriesTable };
