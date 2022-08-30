import './NavBar.css';

// Don't forget the import
import { Link } from 'react-router-dom';
import * as userService  from '../utilities/users-service';


export default function NavBar({user, setUser}) {
  function handleLogOut(){
    userService.logOut();
    setUser(null);
  }

  return (
    <nav >
        <ul className="nav">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/orders">OrderHistory</Link></li>
  <li><Link to="/orders/new">New Orders</Link></li>
  <li><Link to="" onClick={handleLogOut} >LogOut</Link></li>
</ul>
<h5>Welcome {user.name}</h5>
    </nav>
  )
}
