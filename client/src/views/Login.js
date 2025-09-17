import React from "react";

function Login() {
  return (
    <div>
      <h2>Logowanie anonimowe</h2>
      <p>Podaj pseudonim, aby wejść do humizone.</p>
      <input type="text" placeholder="Pseudonim" />
      <button>Zaloguj się</button>
    </div>
  );
}

export default Login;
