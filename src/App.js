import React from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
