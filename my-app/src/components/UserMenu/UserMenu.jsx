import avatar from 'components/UserMenu/userIm.png';
import s from 'components/UserMenu/UserMenu.module.css';

const UserMenu = () => (
  <div className={s.container}>
    <img src={avatar} alt="" width="32" className={s.avatar} />
    <span className={s.name}>Добро пожаловать, </span>
    <button
      type="button"
      // onClick={() => dispatch(authOperations.logOut())}
    >
      Выйти
    </button>
  </div>
);

export default UserMenu;
