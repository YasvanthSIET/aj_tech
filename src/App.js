import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import NavBar from './NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Dm from './Dm';
import Ads from './Ads';
import Bpo from './Bpo';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Dm' element={<Dm />}/>
        <Route path='/Ads' element={<Ads />}/>
        <Route path='/Bpo' element={<Bpo />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
