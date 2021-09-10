import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from './CardAdd.module.css';
const CardAdd = ({ FileInput, onAdd }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });

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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    console.log(card);
    onAdd(card);
    setFile({ fileName: null, fileURL: null });
  };
  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
        className={styles.select}
        ref={themeRef}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="Light">Light</option>
        <option placeholder="Dark">Dark</option>
        <option placeholder="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        ref={professionalRef}
        type="text"
        name="professional"
        placeholder="Professional"
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        name="email"
        placeholder="E-mail"
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;
