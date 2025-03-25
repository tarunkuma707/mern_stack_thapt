import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import { Register } from './pages/Register';
import { Navbar } from "./components/Navbar";
import { Error } from './pages/Error';
import { Footer } from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route activeClassName='is-active' path="/" element={<Home />} />
          <Route activeClassName='is-active' path="/about" element={<About />} />
          <Route activeClassName='is-active' path="/contact" element={<Contact />} />
          <Route activeClassName='is-active' path="/services" element={<Services />} />
          <Route activeClassName='is-active' path="/login" element={<Login />} />
          <Route activeClassName='is-active' path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App