import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import  {Redirect} from 'react-router-dom'

import {useMutation} from '@apollo/client';
import {LOGIN_MUTATION} from '../graphql.js';

import {Button} from './Button';
import {Input} from './Input';

import '../assets/css/LoginForm.css'


export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const errorSpan = useRef(null);

  const [login] = useMutation(LOGIN_MUTATION);

  const showError = () => {
    if(errorSpan.current.className === "error-span-hidden"){
      errorSpan.current.className = "error-span-show"
    }
  }

  const onSubmit = async input => {

    try{
      const {data} = await login({variables:{identifier: input.username, password: input.password}})

      localStorage.setItem("token", data.login.jwt);
      localStorage.setItem("userRole", data.login.user.role.type);
      localStorage.setItem("userId", data.login.user.id);
  
      setIsLoggedIn(true);
      
    } catch(err) {
      console.log(err)
      showError()
    }
    
  };

  return(
    
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="input-container">
        <label htmlFor="login" >Login</label>
        <Input type="text" id="login" name="username" className="input" inputRef={register({required: true})}></Input>
        </div>
        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <Input type="password" id="password" name="password" className="input" inputRef={register({required: true})}></Input>
        </div>
        <div className="button-container">
          <Button type="submit" name="Login" className="login-form-btn"></Button>
          <span ref={errorSpan} className="error-span-hidden">Login ou senha incorretos, tente novamente.</span>
        </div>
        {isLoggedIn ? <Redirect to="/myRegisters"/> : null}
      </form>
  )
}