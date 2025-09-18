import React from 'react';
import './App.css';

// Import komponentów z views
import Navbar from './views/Navbar';
import Home from './views/Home';
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
