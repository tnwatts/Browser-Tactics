import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main className="light-background light-lifted border border-5 border-info">
      <h1 className="col-6 mx-auto my-1 mt-4 dark-text   lighten-area light-background lifted">Please Sign in or Sign up!</h1>
      <button className='btn btn-primary darker-background border my-2  mt-4 border-info border-1  light-text text-light' onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Log In'}
      </button>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
    </main>
  );
}