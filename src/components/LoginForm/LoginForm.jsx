// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="col-5 mx-auto">
        <form className="form-control dark-background lighest-text  lifted my-3 mx-auto border border-primary border-1" autoComplete="off" onSubmit={handleSubmit}>
          <div className="input-group px-3 my-3 light-text text-light">

          <label className="input-label">Email</label>
          <input className="input-group rounded-2 bg-primary text-light" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className="input-label">Password</label>
          <input className="input-group rounded-2 bg-primary text-light" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button className="lighten-area col-3 btn darker-background my-2  btn-outline-info light-lifted fw-bold" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
