import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

import { Input } from "./Input";
import { Button } from "./Button";
import { Hint } from './Hint';

let LoginForm = ({ onSubmit, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(true);

  // Displays expanding animation on mount
  useEffect(() => {
    setSuccess(false);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);

    if (!validateInputs()) return;

    setLoading(true);

    try {
      await onSubmit({ email, password });

      // Hide errors on success
      setError(false);

      // Display collapsing animation
      setSuccess(true);

      // Wait for animations to finish
      setTimeout(() => history.push('/home'), 200);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  const validateInputs = () => {
    const newErrors = {};

    if (!email) newErrors['email'] = 'Email is required';
    if (!password) newErrors['password'] = 'Password is required';

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) return true;
  }

  const getHintText = () => (
    <span>
      Username: <strong>admin@example.com</strong><br/>
      password: <strong>password</strong><br/>
      <i>Note: this is a fake authentication.</i>
    </span>
  )

  return (
    <div className={`container lf ${success ? 'lf--shrink' : ''}`}>
      <Hint text={getHintText()}>
        <h1>Login</h1>
        <form className="lf__form" onSubmit={handleSubmit}>
          <Input
            value={email}
            id="email"
            text="Email"
            type="email"
            className="lf__input"
            onChange={e => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            value={password}
            id="password"
            text="Password"
            type="password"
            className="lf__input"
            onChange={e => setPassword(e.target.value)}
            error={errors.password}
          />
          {error && <span className="error">Username or password is wrong</span>}
          <Button
            loading={loading}
            className="lf__form__submit"
            text="Login"
            onClick={handleSubmit}
          />
        </form>
      </Hint>
    </div>
  );
};

LoginForm = withRouter(LoginForm);

export { LoginForm };
