// App.jsx
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app-container">
      <div className="toggle-buttons">
        <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
          Login
        </button>
        <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
          Signup
        </button>
      </div>
      <div className="form-container">{isLogin ? <Login /> : <Signup />}</div>
    </div>
  );
};

export default App;
