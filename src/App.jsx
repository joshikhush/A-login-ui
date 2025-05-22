import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopX from './components/PopX';
import Login from './components/login';
import SignupPage from './pages/signuppage';
import AccountSettings from './components/AccountSettings';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopX />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;