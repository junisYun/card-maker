import React from 'react';
import styles from './CardPreview.module.css';
import DEFAULT_IMAGE from '../../image/default_logo.png';

const CardPreview = ({ card }) => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.title}>CardPreview</h1>
      <ul className={styles.card__list}>
        {Object.keys(card).map((key) => {
          const url = card[key].fileURL || DEFAULT_IMAGE;
          return (
            <li
              className={`${styles.card} ${getStyles(card[key].theme)}`}
              key={card[key].id}
            >
              <img className={styles.img} src={url} alt="profile_photo" />
              <div className={styles.description}>
                <h2 className={styles.name}>{card[key].name}</h2>
                <p className={styles.company}>{card[key].company}</p>
                <div className={styles.line}></div>
                <p className={styles.professional}>{card[key].professional}</p>
                <p className={styles.email}>{card[key].email}</p>
                <p className={styles.message}>{card[key].message}</p>
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
    case 'Dark':
      return styles.dark;
    case 'Light':
      return styles.light;
    case 'Colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};
export default CardPreview;
