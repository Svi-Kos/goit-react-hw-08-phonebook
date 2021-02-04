import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from 'redux/operations';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    padding: 50,
  },
};

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={styles.container}>
      {' '}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>{' '}
      <div>
        {' '}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
