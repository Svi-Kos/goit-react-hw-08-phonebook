import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { authOperations } from 'redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  form: {
    display: 'grid',
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <div>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '15px' }}
          >
            LogIn
          </Button>
        </form>
      </div>
    </div>
  );
}
