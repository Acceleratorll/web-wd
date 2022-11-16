import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/user/Contact';
import Desain from './pages/user/Desain';
import Faq from './pages/user/Faq';
import LandingPage from './pages/LandingPage';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
// import Admin from './pages/p/Admin';
import AdminNew from './pages/Admin';
import Template from './pages/template/Template';
import MasterForm from './pages/user/MultiStepForm/MasterForm';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/desain" element={<Desain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/masuk" element={<Login />} />
          <Route path="/buat_undangan" element={<LandingPage />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/admin/*" element={<AdminNew />} />
          <Route path="/template" element={<Template />} />
          <Route path="/isiData" element={<MasterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
