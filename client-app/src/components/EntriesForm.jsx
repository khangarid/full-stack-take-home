import React, { useState } from 'react'

import { Input } from './Input';
import { Button } from './Button';

const EntriesForm = ({ onSubmit }) => {
  const [flow, setFlow] = useState('');
  const [pressure, setPressure] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateInputs()) return;

    setLoading(true);

    await onSubmit({ flow, pressure });

    setFlow('');
    setPressure('');

    setLoading(false);
  }

  const validateInputs = () => {
    const newErrors = {};

    if (pressure < 1) newErrors['pressure'] = 'Pressure must be greater than 0';
    if (flow < 1) newErrors['flow'] = 'Flow must be greater than 0';
    if (pressure === '') newErrors['pressure'] = 'Pressure is required';
    if (flow === '') newErrors['flow'] = 'Flow is required';

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) return true;
  }

  return (
    <form className="form entries-form" onSubmit={handleSubmit}>
      <Input
        value={flow}
        id='flow'
        text='Flow'
        onChange={e => setFlow(e.target.value)}
        error={errors.flow}
      />
      <Input
        value={pressure}
        id='pressure'
        text='Pressure'
        onChange={e => setPressure(e.target.value)}
        error={errors.pressure}
      />
      <Button loading={loading} onClick={handleSubmit} text="Add new entry" className="entires-form__button" />
    </form>
  )
}

export { EntriesForm }
