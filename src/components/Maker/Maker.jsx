import React, { useEffect, useState } from 'react';
import styles from './Maker.module.css';
import logo from '../../image/logo.png';
import { useHistory } from 'react-router';
import CardMaker from '../CardMaker/CardMaker';
import CardPreview from '../CardPreview/CardPreview';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [card, setCard] = useState({});
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  console.log(historyState);
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    cardRepository.syncCards(userId, (card) => {
      setCard(card);
    });
  }, [userId]);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/card-maker');
      }
    });
  }, [history, authService]);

  const deleteCard = (deleteCard) => {
    const updated = { ...card };
    delete updated[deleteCard.id];
    setCard(updated);
    cardRepository.removeCard(userId, deleteCard);
  };
  const createOrupdateCard = (updatedCard) => {
    console.log(updatedCard);
    const updated = { ...card };
    updated[updatedCard.id] = updatedCard;
    setCard(updated);
    cardRepository.saveCard(userId, updatedCard);
  };
  return (
    <section className={styles.maker}>
      <div className={styles.maker__header}>
        <img className={styles.maker__img} src={logo} alt="logo" />
        <h1 className={styles.maker__title}>Business Card Maker</h1>
        <button className={styles.maker__logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className={styles.maker__main}>
        <CardMaker
          className={styles.card__maker}
          FileInput={FileInput}
          card={card}
          addCard={createOrupdateCard}
          deleteCard={deleteCard}
          updateCard={createOrupdateCard}
        />
        <CardPreview className={styles.card__preview} card={card} />
      </div>
      <div className={styles.maker__footer}>
        <h3>Code your dream</h3>
      </div>
    </section>
  );
};

export default Maker;
