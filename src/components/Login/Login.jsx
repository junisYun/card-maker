import React from 'react';
import styles from './Login.module.css';
import logo from '../../image/logo.png';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <div className={styles.login}>
      <header className={styles.login__header}>
        <img className={styles.login__img} src={logo} alt="logo" />
        <h1 className={styles.login__title}>Business Card Maker</h1>
      </header>
      <main className={styles.login__main}>
        <h1 style={{ fontSize: '2.5rem' }}>Login</h1>
        <div className={styles.login__btns}>
          <div className={styles.login__btn} onClick={onLogin}>
            Google
          </div>
          <div className={styles.login__btn} onClick={onLogin}>
            Github
          </div>
        </div>
      </main>
      <footer className={styles.login__footer}>
        <h3>Code your dream</h3>
      </footer>
    </div>
  );
};

export default Login;
