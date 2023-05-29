import './App.css';
import {BrowserRouter as Router, Routes,Route,useNavigate} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Profile from './components/Profile/Profile'
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:username' element={<Profile />} />

        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;