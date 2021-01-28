import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import s from 'components/AppBar/AppBar.module.css';

function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}

export default AppBar;
