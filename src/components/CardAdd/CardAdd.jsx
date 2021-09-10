import React, { useRef } from 'react';
import Button from '../Button/Button';
import ImageFileInput from '../Image_file_input/ImageFileInput';
import styles from './CardAdd.module.css';
const CardAdd = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const professionalRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      professional: professionalRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input className={styles.input} ref={nameRef} type="text" name="name" placeholder="Name" />
      <input className={styles.input} ref={companyRef} type="text" name="company" placeholder="Company" />
      <select className={styles.select} ref={themeRef} name="theme" placeholder="Theme">
        <option placeholder="Light">Light</option>
        <option placeholder="Dark">Dark</option>
        <option placeholder="Colorful">Colorful</option>
      </select>
      <input className={styles.input} ref={professionalRef} type="text" name="professional" placeholder="Professional" />
      <input className={styles.input} ref={emailRef} type="text" name="email" placeholder="E-mail" />
      <textarea className={styles.textarea} ref={messageRef} name="message" placeholder="Message"></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;
