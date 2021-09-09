import React from 'react';
import Button from '../Button/Button';
import ImageFileInput from '../Image_file_input/ImageFileInput';
import styles from './CardMaker.module.css';

const CardMaker = ({ card }) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.maker__list}>
        {card.map((item) => {
          return (
            <form className={styles.form} key={item.id}>
              <input className={styles.input} type="text" name="name" value={item.name} />
              <input className={styles.input} type="text" name="company" value={item.company} />
              <select className={styles.select} name="theme" value={item.theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
              </select>
              <input className={styles.input} type="text" name="professional" value={item.professional} />
              <input className={styles.input} type="text" name="email" value={item.email} />
              <textarea className={styles.textarea} name="message" value={item.message}></textarea>
              <div className={styles.fileInput}>
                <ImageFileInput />
              </div>
              <Button name="Delete" onClick={onSubmit} />
            </form>
          );
        })}
      </div>
    </section>
  );
};

export default CardMaker;
