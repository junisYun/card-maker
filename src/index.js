import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader.';
import ImageFileInput from './components/Image_file_input/ImageFileInput';

const authService = new AuthService();
const imageUploader = new ImageUploader();

const FileInput = (props) => <ImageFileInput {...props} imageUploader={imageUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);