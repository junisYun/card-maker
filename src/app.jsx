import './App.css';
import Login from './components/Login/Login';

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
