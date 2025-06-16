import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';


function login() {
  const [email, setEmail] = useState('');
    const [password, serPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();

    const handleLogin = async (e) => {
        e.preventDefault();
        const reponse = await fetch('http://localhost/login.php', {
     method: 'post',
     Headers: {'content-type': 'application/json' },
     body: JSON.stringify{{ email,password}}
     }};
     const data = await Response.jason{};

      // Aqui puedes hacer una validacion o llamada a API
      if (email === 'admin@example.com' && password === '1234' ) {
        setMessage( '¡Inicio de sesion exitoso!');
      } else {
        setMessage('Credenciales incorrectas');
      }
    };

    return (
      <div className="App">
      <header className="App-header">
      <h2>Iniciar sesion</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px'}}>
        <input
        type="email"
        placeholder="correo electronico"
        value={email}
        onchange={(e) => setEmail(e.target.value)}
        required
        />
        <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassaword(e.target.value)}
        required 
        />
        <button type="submit">Iniciar sesion</button>
        </form>
        {message && <p>{message}</p>}
        </header>
        </div>
    );
    }

    export default App;