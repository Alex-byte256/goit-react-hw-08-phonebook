import Contacts from './Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Registration from './Registration/Registration';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from '../redux/auth';
import Login from './Login/Login';
import { fetchContacts } from '../redux/api';
import HomePage from './HomePage/HomePage';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';


function  App (){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(fetchContacts())
  }, [dispatch]);

    return (
      <div>
        <Routes>
          <Route path="goit-react-hw-08-phonebook/" element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path="/contacts" element={<PrivateRoute
                  redirectTo="goit-react-hw-08-phonebook/login"
                  component={<Contacts />}
                />} />
                <Route path="/register" element={<PublicRoute
                  restricted
                  redirectTo="goit-react-hw-08-phonebook/contacts"
                  component={<Registration />}
                />} />
                <Route path="/login" element={<PublicRoute
                  restricted
                  redirectTo="goit-react-hw-08-phonebook/contacts"
                  component={<Login />}
                />} />
          </Route>
        </Routes>
      </div>
    );

};



export default App;
