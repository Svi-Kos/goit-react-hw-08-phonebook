import { NavLink } from 'react-router-dom';
import s from 'components/Navigation/Navigation.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      LogIn
    </NavLink>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Register
    </NavLink>
  </div>
);

export default AuthNav;
