import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

function Navigation() {

  return(
    <div className={css.nav}>
        <NavLink to="register">Регістрація</NavLink>
        <NavLink to="login">Логін</NavLink>
        <NavLink to="contacts">Контакти</NavLink>
    </div>
  )
}

export default Navigation;
