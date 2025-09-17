import React from "react";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
