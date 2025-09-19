import React from 'react';
import './App.css';

// Import komponentów z views
import Navbar from './../src/views/Navbar';
import Home from './../src/views/Home';
import Footer from './../src/views/Footer';

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
