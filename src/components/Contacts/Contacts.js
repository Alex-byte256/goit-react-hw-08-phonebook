import ContactForm from '../PhoneBook/ContactForm ';
import Filter from '../PhoneBook/Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/api';



function  App (){
  const loading = useSelector(state => state.contacts.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm   />
      <Filter />
      <h2>Contacts </h2>
      {!loading ? <ContactList />: <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />}
    </div>
  );

};



export default App;
