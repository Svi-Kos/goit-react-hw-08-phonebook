import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { authOperations } from 'redux/auth';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
// import ContactList from './components/ContactList';
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from 'components/Filter/Filter';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import ContactsView from 'views/ContactsView';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact component={HomeView}></Route>
        <Route path="/login" component={LoginView}></Route>
        <Route path="/register" component={RegisterView}></Route>
        <Route path="/contacts" component={ContactsView}></Route>
      </Switch>
      {/* <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div> */}
    </Container>
  );
}

export default App;
