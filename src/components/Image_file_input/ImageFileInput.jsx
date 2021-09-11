import React, { useRef, useState } from 'react';
import styles from './ImageFileInput.module.css';
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoading(true);
    const upload = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    console.log(upload);
    onFileChange({
      name: upload.original_filename,
      url: upload.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={
            name ? `${styles.button} ${styles.pink}` : `${styles.button}`
          }
          onClick={onButtonClick}
        >
          {name || 'No File'}
        </button>
      )}

      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
