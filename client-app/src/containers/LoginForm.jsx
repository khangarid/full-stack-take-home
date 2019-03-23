import React from 'react';

import { LoginForm as Form } from '../components';

let LoginForm = () => {
  const handleSubmit = (credentials) => {
    return new Promise((resolve, reject) => {
      // Deliberately delay response to show loading animation
      setTimeout(() => {
        if (!credentials) reject();
        if (credentials.email !== 'admin@example.com') reject();
        if (credentials.password !== 'password') reject();
        resolve();
      }, 500);
    })
  }

  return <Form onSubmit={handleSubmit} />
};

export { LoginForm };
