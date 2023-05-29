import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Profile from './components/Profile/Profile'
import Error from './components/Error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;