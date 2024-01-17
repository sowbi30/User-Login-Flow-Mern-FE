import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/User/Login';
import Register from './components/User/Register';
import PasswordReset from './components/User/PasswordReset';
import ForgotPassword from './components/User/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  
  return (
    <hgroup className="conatianer-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

          
        </Routes>
        <ToastContainer />
      </Router>
    </hgroup>
  );
}

export default App;
