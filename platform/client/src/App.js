import React from 'react';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Footer from './views/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/czat" element={<ChatRoom />} />
        <Route path="/zadania" element={<Tasks />} />
        <Route path="/logowanie" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
