import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import './App.css';
import { authOperations, authSelectors } from 'redux/auth';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "register-view" */),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
