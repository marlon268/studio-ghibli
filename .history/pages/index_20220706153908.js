import { useRouter } from "next/router";
import React, { useState } from "react";
import  ButtonLogin from "../components/UI/moleculas/ButtonLogin/ButtonLogin";
import {InputBase} from '../components/UI/moleculas/InputBase'
import {signIn, useSession} from "next-auth/react"

const Login = () => {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(false);

  const register = () => {
    setIsRegister(true);
  };

  const login = () => {
    setIsRegister(false);
  };

  
  const {data: session, status} = useSession();

  if(status !== 'loading' && status === 'authenticated') {
    router.push('/home')
  }

  return (
    <main className="login">
      <div className="login-logo">
        <img src="./icons/logo.png" alt="logo login" />
      </div>   
      {isRegister ? (
        <>
          <div className="login-title">
            <h1>Register</h1>
          </div>
          <div className="login-register">
            <div className="login-sesion-input">
              <InputBase img="./icons/PersonUser.png" tipo="text" label="UserName" />
              <InputBase img="./icons/Email.png"tipo="text" label="Email" />
              <InputBase img="./icons/PasswordIcon.png" tipo="password" label="Password" />
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
          <div className="login-sesion">
            <div className="login-sesion-input">
              <InputBase img="./icons/UserIcon.png" tipo="text" label="User" />
              <InputBase img="./icons/PasswordIcon.png" tipo="password" label="Password" />
            </div>
            <div className="login-sesion-button">
              <button onClick={register}>Register</button>
              <button onClick={()=> router.push("/starter")} >Log-in</button>
            </div>          
              <div className='buttonLogin'>
                    <ButtonLogin  
                      onClick={()=> signIn('facebook')}
                      className = "facebook"
                      type = "button"
                      text = "Connect with Facebook"                 
                   />
              </div>
              <div className='buttonLogin'>
                    <ButtonLogin  
                      onClick={() => signIn('twitter')}
                      className = "twitter"
                      type = "button"
                      text = "Connect with Twitter"
                    />
              </div>
              <div className='buttonLogin'>
                    <ButtonLogin  
                      onClick={() => signIn('github')}
                      icon={"fa fa-github"}
                      className = "github"
                      type = "button"
                      text = "Connect with Github"
                    />
              </div>
            </div>
        </>
      )}
    </main>
  );
};


export default Login;
