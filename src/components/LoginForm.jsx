import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import  {Redirect} from 'react-router-dom'

import {Button} from './Button';
import {Input} from './Input';

import '../assets/css/LoginForm.css'


export default function LoginForm() {
  const { register, handleSubmit} = useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({status: false, message: "Invalid username or password"});
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const onSubmit = async data => {

    console.log(data);
    await setUsername(data.username);
    await setPassword(data.password);


    try {
    //API CALL AQUI
       if (username === "augusto" && password === "123456789") {
        setIsLoggedIn(true)
        console.log("Certo!")
        
      } else {
        setError({status: true});
        console.log("errado")
      }
    } catch (e) {
      setError({status: true, message: e});
    } finally {
      setIsloading(false);
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