import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect  , lazy} from 'react';
import { authOperations } from '../redux/auth';
import HomePage from './HomePage/HomePage';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';

const Login = lazy(() => import('./Login/Login'));
const Registration = lazy(() => import('./Registration/Registration'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
function  App (){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

    return (
      <div>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path="contacts" element={<PrivateRoute
                  redirectTo="login"
                  component={<Contacts />}
                />} />
                <Route path="register" element={<PublicRoute
                  restricted
                  redirectTo="contacts"
                  component={<Registration />}
                />} />
                <Route path="login" element={<PublicRoute
                  restricted
                  redirectTo="contacts"
                  component={<Login />}
                />} />
          </Route>
        </Routes>
      </div>
    );

};



export default App;
