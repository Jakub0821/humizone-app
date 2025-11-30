import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Witaj w <span className="brand">Humizone</span></h1>
        <p>Twoja strefa zadań, czatu i grup</p>
        <div className="home-buttons">
          <button onClick={() => navigate("/logowanie")}>Zaloguj się</button>
          <button onClick={() => navigate("/rejestracja")}>Zarejestruj się</button>
        </div>
      </div>
      <div className="home-image">
        <img src="https://undraw.co/api/illustrations/choose-your-path.svg" alt="Ilustracja" />
      </div>
    </div>
  );
};

export default Home;