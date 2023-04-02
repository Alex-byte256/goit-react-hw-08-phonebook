import { NavLink } from 'react-router-dom';


function Navigation() {

  return(
    <>
        <NavLink to="/register">Регістрація</NavLink>
        <NavLink to="/login">Логін</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
    </>
  )
}

export default Navigation;
