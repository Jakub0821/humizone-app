import React from 'react';
import "../css/Home.css";

const Home = () => {
  return (
    <div className="dashboard-container">
      <h1>Witaj w Humizone!</h1>
      <p>Oto Twój panel użytkownika:</p>

      <div className="dashboard-widgets">
        <div className="widget">📅 Twoje najbliższe zadania</div>
        <div className="widget">💬 Ostatnie wiadomości</div>
        <div className="widget">👥 Twoje grupy</div>
        <div className="widget">🔔 Powiadomienia</div>
      </div>
    </div>
  );
};

export default Home;