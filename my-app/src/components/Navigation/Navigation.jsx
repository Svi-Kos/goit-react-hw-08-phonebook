import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import s from 'components/Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav style={{ flexGrow: 1 }}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <HomeIcon fontSize="large" />
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          <ContactsIcon fontSize="large" />
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
