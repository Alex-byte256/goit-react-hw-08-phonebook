import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';


function Header () {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return(
    <>
      <Navigation/>
      {isLoggedIn&&<UserMenu/>}
    </>
  )
}

export default Header;
