import React, { useEffect, useState } from 'react';
import styles from './Maker.module.css';
import logo from '../../image/logo.png';
import { useHistory } from 'react-router';
import CardMaker from '../CardMaker/CardMaker';
import CardPreview from '../CardPreview/CardPreview';

const Maker = ({ authService }) => {
  const [card, setCard] = useState([
    {
      id: 1,
      name: 'Ratta1',
      company: 'Samsung',
      professional: 'Software Enginner',
      email: 'junis.yun94@gmail.com',
      theme: 'dark',
      message: '"don`t forget to code your dream"',
      fileName: 'ratta',
      fileURL: 'ratta.png',
    },
    {
      id: 2,
      name: 'Ratta2',
      company: 'Samsung',
      professional: 'Software Enginner',
      email: 'junis.yun94@gmail.com',
      theme: 'colorful',
      message: '"don`t forget to code your dream"',
      fileName: 'ratta',
      fileURL: null,
    },
    {
      id: 3,
      name: 'Ratta3',
      company: 'Samsung',
      professional: 'Software Enginner',
      email: 'junis.yun94@gmail.com',
      theme: 'light',
      message: '"don`t forget to code your dream"',
      fileName: 'ratta',
      fileURL: null,
    },
  ]);
  const [displayName, setDisplayName] = useState('');
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    setDisplayName(history.location.state.displayName);
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/card-maker');
      }
    });
  }, [history, authService]);
  return (
    <section className={styles.maker}>
      <div className={styles.maker__header}>
        <img className={styles.maker__img} src={logo} alt="logo" />
        <h1 className={styles.maker__title}>Business Card Maker</h1>
        <span>{displayName}</span>
        <button className={styles.maker__logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className={styles.maker__main}>
        <CardMaker className={styles.card__maker} card={card} />
        <CardPreview className={styles.card__preview} card={card} />
      </div>
      <div className={styles.maker__footer}>
        <h3>Code your dream</h3>
      </div>
    </section>
  );
};

export default Maker;
