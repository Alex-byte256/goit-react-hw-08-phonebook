import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../../redux/auth';


function UserMenu (){
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return(
    <div>
      <p>{email}</p>
      <button onClick={()=> dispatch(authOperations.logOut())}>Logout</button>
    </div>
  )
}

export default UserMenu;
