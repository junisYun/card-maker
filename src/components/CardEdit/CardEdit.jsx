import React, { useRef } from 'react';
import Button from '../Button/Button';
import styles from './CardEdit.module.css';
const CardEdit = ({ FileInput, card, updateCard, deleteCard }) => {
  const { id, name, company, theme, professional, email, message, fileName } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const professionalRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = () => {
    deleteCard(card);
  };
  const onChange = (event) => {
    console.log(event.target.name);
    const updated = {
      ...card,
      [event.target.name]: event.target.value,
    };
    updateCard(updated);
  };
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  return (
    <form className={styles.form} key={id} data-id={id}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        ref={themeRef}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        ref={professionalRef}
        type="text"
        name="professional"
        value={professional}
        onChange={onChange}
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEdit;
