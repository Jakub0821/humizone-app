import React from 'react';
import '../css/Register.css'; // Dodamy stylizację osobno

function Register() {
  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Humizone</h1>
        <p>Witaj w naszej aplikacji!</p>
      </div>
      <div className="register-right">
        <h2>Rejestracja</h2>
        <form>
          <input type="text" placeholder="Imię" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Hasło" />
          <input type="password" placeholder="Powtórz hasło" />
          <button type="submit">Zarejestruj się</button>
        </form>
      </div>
    </div>
  );
}

export default Register;