import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

function Navigation() {

  return(
    <div className={css.nav}>
        <NavLink to="goit-react-hw-08-phonebook/register">Регістрація</NavLink>
        <NavLink to="goit-react-hw-08-phonebook/login">Логін</NavLink>
        <NavLink to="goit-react-hw-08-phonebook/contacts">Контакти</NavLink>
    </div>
  )
}

export default Navigation;
