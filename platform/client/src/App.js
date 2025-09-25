import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import ChatRoom from './views/ChatRoom';
import Tasks from './views/Tasks';
import Login from './views/Login';
import Navbar from './views/Navbar';
import Footer from './views/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/czat" element={<ChatRoom />} />
        <Route path="/zadania" element={<Tasks />} />
        <Route path="/logowanie" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
