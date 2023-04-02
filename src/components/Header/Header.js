import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import css from './Header.module.css'

function Header () {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return(
    <>
      <div className={css.header}>
        <Navigation/>
        {isLoggedIn&&<UserMenu/>}
      </div>
    <hr/>
    </>

  )
}

export default Header;
