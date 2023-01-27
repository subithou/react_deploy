import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Header from './pages/Footer';
import Footer from './pages/Footer';



function App() {
  return (
    
    <Router>
      
      <Routes>
        
        <Route exact path ='/' element = {<Home/>} />
        <Route exact path ='/portfolio' element = {<Portfolio/>} />
        <Route exact path ='/about' element = {<About/>} />
      </Routes>

      <Footer/>
    </Router>
    
  );
}

export default App;
