import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import * as operations from 'redux/operations';
import ContactList from './components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
