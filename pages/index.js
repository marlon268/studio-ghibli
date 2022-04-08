import React, { useState } from "react";

import {InputBase} from '../components/UI/moleculas/InputBase'


const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const register = () => {
    setIsRegister(true);
  };

  const login = () => {
    setIsRegister(false);
  };

  return (
    <main className="login">
      <div className="login-logo">
        <img src="./icons/logo.png" alt="logo login" />
      </div>

      {isRegister ? (
        <>
          <div className="login-title">
            <h1>User Account</h1>
          </div>
          <div className="login-sesion">
            <div className="login-sesion-input">
              <InputBase img="./icons/PersonUser.png" tipo="text" label="UserName" />
              <InputBase img={EmailIcon} tipo="text" label="Email" />
              <InputBase img={LockIcon} tipo="password" label="Password" />
            </div>
            <div className="login-sesion-create">
              <button onClick={login}>Return</button>
              <button>Create</button>
            </div>
            <div className="login-sesion-terminos">
              <h3>By creating an account or signing you agree to our</h3>
              <h4>Terms and Conditions.</h4>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="login-title">
            <h1>Log-in</h1>
          </div>
          <div className="login-sesion">
            <div className="login-sesion-input">
              <InputBase img="./icons/UserIcon.png" tipo="text" label="User" />
              <InputBase img="./icons/PasswordIcon.png" tipo="password" label="Password" />
            </div>
            <div className="login-sesion-button">
              <button onClick={register}>Register</button>
              <button>Log-in</button>
            </div>
            <div className="login-sesion-social">
              <div>
                <img src="./icons/IconTwitter.png" alt="logo twitter" />
                <button>Connect with Twitter</button>
              </div>
              <div>
                <img src="./icons/IconFacebook.png" alt="logo facebook" />
                <button>Connect with Facebook</button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Login;
