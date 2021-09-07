import React, { useEffect, useState } from 'react';
import styles from './Maker.module.css';
import logo from '../../image/logo.png';
import { useHistory } from 'react-router';

const Maker = ({ authService }) => {
  const [displayName, setDisplayName] = useState('');
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    setDisplayName(history.location.state.displayName);
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  }, [authService, history, displayName]);
  return (
    <section className={styles.maker}>
      <div className={styles.maker__header}>
        <img className={styles.maker__img} src={logo} alt="logo" />
        <h1 className={styles.maker__title}>Business Card Maker</h1>
        <span>{displayName}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className={styles.maker__main}>sldkfjlskejflkasefjlk</div>
      <div className={styles.maker__footer}>
        <h3>Code your dream</h3>
      </div>
    </section>
  );
};

export default Maker;
