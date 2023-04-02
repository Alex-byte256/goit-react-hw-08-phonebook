
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PublicRoute({
                                      restricted = false,
                                      redirectTo = '/',
                                      component: Component,
                                    }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
