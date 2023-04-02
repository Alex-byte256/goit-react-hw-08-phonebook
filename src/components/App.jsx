import Contacts from './Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Registration from './Registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from '../redux/auth';
import Login from './Login/Login';
import { fetchContacts } from '../redux/api';


function  App (){
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(fetchContacts())
  }, [dispatch]);

    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/register" element={<Registration/>} />
                <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </div>
    );

};



export default App;
