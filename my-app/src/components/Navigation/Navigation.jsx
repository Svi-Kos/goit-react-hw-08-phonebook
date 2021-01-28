import { NavLink } from 'react-router-dom';
import s from 'components/Navigation/Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Главная
    </NavLink>
    <NavLink
      to="/contacts"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Contacts
    </NavLink>
    {/* <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Заметки
    </NavLink> */}
  </nav>
);

export default Navigation;
