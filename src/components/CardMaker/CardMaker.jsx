import React, { useState } from 'react';
import Button from '../Button/Button';
import CardAdd from '../CardAdd/CardAdd';
import CardEdit from '../CardEdit/CardEdit';
import ImageFileInput from '../Image_file_input/ImageFileInput';
import styles from './CardMaker.module.css';

const CardMaker = ({ card, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.maker__list}>
        {Object.keys(card).map((key) => {
          return <CardEdit key={key} card={card[key]} deleteCard={deleteCard} updateCard={updateCard} />;
        })}
        <CardAdd onAdd={addCard} />
      </div>
    </section>
  );
};

export default CardMaker;
