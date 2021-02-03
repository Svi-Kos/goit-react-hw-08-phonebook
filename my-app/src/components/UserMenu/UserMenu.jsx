import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
// import avatar from 'components/UserMenu/userIm.png';
import s from 'components/UserMenu/UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <AccountCircleIcon fontSize="large" />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
      >
        LogOut
      </Button>
    </div>
  );
}
export default UserMenu;
