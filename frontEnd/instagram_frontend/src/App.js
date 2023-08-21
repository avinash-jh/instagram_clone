import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignupPage from './SignupPage';
import UserProfile from './UserProfile';
function App() {
  return (
    <div className="App">
     <UserProfile></UserProfile>
    </div>
  );
}

export default App;
