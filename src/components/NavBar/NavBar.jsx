import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
  <nav className="nav-bar dark-background lifted rounded-3 p-2 ">
    <ul className="nav nav-tabs">
  <NavLink className={({isActive}) => [ 'mx-1 bg-gradient nav-link', (isActive ? "border border-1 border-warning bg-light darkest-text": "text-light")].filter(Boolean).join(" ")} to='/Profile' >Profile</NavLink>
    <NavLink className={({isActive}) => [ 'mx-1 bg-gradient nav-link', (isActive ? "bg-success darkest-text": "light-text")].filter(Boolean).join(" ")}  to='/Game'>Game</NavLink>
   <NavLink className="nav-link mx-1 text-warning bg-gradient" to='' onClick={handleLogOut}>Log Out</NavLink>
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