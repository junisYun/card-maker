import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
initializeApp(config);

class AuthService {
  login(providerName) {
    let provider;
    if (providerName === 'Google') provider = new GoogleAuthProvider();
    if (providerName === 'Github') provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }
}

export default AuthService;
