/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import style from './style.module.scss';

const Auth = () => {
  const [section, setSection] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section className={style.auth}>
      <h1>Welcome to QuickTrand</h1>
      {section === 'login' ? (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            you don&apos;t have an account?
            <span onClick={() => setSection('register')}> register</span>
          </p>
        </div>
      ) : (
        <div className="register">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
          </form>
          <p>
            you have an account?
            <span onClick={() => setSection('login')}> login</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default Auth;
