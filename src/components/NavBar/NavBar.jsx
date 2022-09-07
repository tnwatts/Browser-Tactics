import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
  <nav className="nav-bar dark-background p-2 mb-2">
    <ul className="nav nav-tabs">
  <NavLink className={a => "nav-link" + (a ? " bg-secondary" : "") } to='/Profile'>Profile</NavLink>
  <li className="nav-item">
    <NavLink className="nav-link light-background" to='/Game'>Game</NavLink>
  </li>
  <li className="nav-item">
   <NavLink className="nav-link" to='' onClick={handleLogOut}>Log Out</NavLink>
  </li>
</ul>
      {/* 
      &nbsp; | &nbsp;
      <Link to='/Game'>Game</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      */}
    </nav>
  );
}