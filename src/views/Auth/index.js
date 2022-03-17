/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import { login, register } from '../../redux/user/reducer';

const Auth = () => {
  const [section, setSection] = useState('login');
  const [error, setError] = useState('');

  const store = useSelector((reducer) => reducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ({ email, pass }) => {
    if (!email.includes('@')) {
      setError('please enter a valid email');
      return;
    }
    await dispatch(login({ email, pass }));
    navigate('/dashboard');
  };
  const handleRegister = async (data) => {
    if (!data.email.includes('@')) {
      setError('please enter a valid email');
      return;
    }

    if (data.pass !== data.confirmPass) {
      setError('please enter a matching password');
      return;
    }

    await dispatch(register(data));
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    setError('');
    e.preventDefault();

    if (e.target.elements.fullName) {
      handleRegister({
        name: e.target.elements.fullName.value,
        confirmPass: e.target.elements.confirmPassword.value,
        pass: e.target.elements.password.value,
        email: e.target.elements.email.value,
      });
    } else {
      handleLogin({
        pass: e.target.elements.password.value,
        email: e.target.elements.email.value,
      });
    }
  };

  return (
    <section className={style.auth}>
      <h1>Welcome to QuickTrand</h1>
      {section === 'login' ? (
        <div className="login">
          <form onSubmit={handleSubmit}>
            {(error || store.error) && <small>{error || store.error}</small>}
            <input type="text" placeholder="Email" name="email" required />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
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
            {(error || store.error) && <small>{error || store.error}</small>}
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              required
            />
            <input type="text" placeholder="Email" name="email" required />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
            />
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
