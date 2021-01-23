import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import  {Redirect} from 'react-router-dom'

import {useMutation} from '@apollo/client';
import {LOGIN_MUTATION} from '../graphql.js';

import {Button} from './Button';
import {Input} from './Input';

import '../assets/css/LoginForm.css'


export default function LoginForm() {
  const { register, handleSubmit} = useForm();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [login] = useMutation(LOGIN_MUTATION);

  const onSubmit = async input => {

    try{
      const {data} = await login({variables:{identifier: input.username, password: input.password}})

      localStorage.setItem("token", data.login.jwt);
      localStorage.setItem("role", data.login.user.role.type);
      localStorage.setItem("userId", data.login.user.id);
  
      setIsLoggedIn(true);

      
    } catch(err) {
      console.log(err)
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
        </div>
        {isLoggedIn ? <Redirect to="/myRegisters"/> : null}
      </form>
  )
}