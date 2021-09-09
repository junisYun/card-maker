import React from 'react';
import styles from './CardPreview.module.css';
import DEFAULT_IMAGE from '../../image/default_logo.png';

const CardPreview = ({ card }) => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.title}>CardPreview</h1>
      <ul className={styles.card__list}>
        {card.map((item) => {
          const url = item.fileURL || DEFAULT_IMAGE;
          return (
            <li className={`${styles.card} ${getStyles(item.theme)}`} key={item.id}>
              <img className={styles.img} src={url} alt="profile_photo" />
              <div className={styles.description}>
                <h2 className={styles.name}>{item.name}</h2>
                <p className={styles.company}>{item.company}</p>
                <div className={styles.line}></div>
                <p className={styles.professional}>{item.professional}</p>
                <p className={styles.email}>{item.email}</p>
                <p className={styles.message}>{item.message}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const getStyles = (theme) => {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};
export default CardPreview;
