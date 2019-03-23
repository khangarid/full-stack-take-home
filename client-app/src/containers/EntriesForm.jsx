import React from 'react';
import { connect } from 'react-redux';

import { EntriesForm as Form } from '../components';
import { addEntry, fetchEntries } from '../store/entries/actions';

let EntriesForm = ({ addEntry, fetchEntries }) => {
  const handleSubmit = async entry => {
    await addEntry(entry);
  }

  return <Form onSubmit={handleSubmit} />
}

EntriesForm = connect(
  null,
  { addEntry, fetchEntries }
)(EntriesForm);

export { EntriesForm };
