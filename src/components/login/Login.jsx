import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Login ({ onLogin }) {

  const username = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  function handleSubmit (e) {
    e.preventDefault();

    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };
    
    if (onLogin(credentials)) {
        navigate('/');
    }
  }

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input id="username" name="username" type="text" ref={username} />
            </label>
            <br />
            <label>
                Password:
                <input id="password" name="password" type="text" ref={password} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
  );

};

export default Login;

