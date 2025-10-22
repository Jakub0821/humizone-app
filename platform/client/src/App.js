import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import ChatRoom from './views/ChatRoom';
import Tasks from './views/Tasks';
import Login from './views/Login';
import Navbar from './views/Navbar';
import Groups from './views/Groups';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Stron główna" element={<Home />} />
        <Route path="/czat" element={<ChatRoom />} />
        <Route path="/zadania" element={<Tasks />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/grupy" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
