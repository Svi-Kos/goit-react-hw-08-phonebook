import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import * as operations from 'redux/operations';
import s from '../ContactForm/ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.contactForm}>
      <TextField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        label="Number"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        name="number"
        value={number}
        onChange={handleChange}
      />
      <p className={s.numberFormat}>Format: xxx-xx-xx</p>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: '15px' }}
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;
