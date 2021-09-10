import React, { useEffect } from 'react';
import styles from './Login.module.css';
import logo from '../../image/logo.png';
import { useHistory } from 'react-router';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/card-maker/maker',
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToMaker(data.user.uid);
      });
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
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
