import React from 'react';
import '../css/Login.css'; // Styl oddzielny

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Humizone</h1>
        <p>Zaloguj się, aby kontynuować</p>
      </div>
      <div className="login-right">
        <h2>Logowanie</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Hasło" />
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
