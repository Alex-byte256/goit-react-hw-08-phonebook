

import css from "./Registration.module.css"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../../redux/auth';

function Registration () {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, email, password })
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return(
    <section className={css.section}>
    <form  className={css.form} onSubmit={handleSubmit}>
      <input onChange={handleChange} value={name} type="text" name="name"  placeholder="Name"/>
      <input onChange={handleChange} value={email} type="email" name="email" placeholder="Email" />
      <input onChange={handleChange} value={password} type="password" name="password"  placeholder="Password"/>
      <button type="submit">Регістрація</button>
    </form>
    </section>
  )
}


export default  Registration;
