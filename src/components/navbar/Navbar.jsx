import "./navbar.css";
import {UserAuth} from "../../components/context/AuthContext";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const {signIn} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }};

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>croomsbooking</span>

        <div className='navItem'>
          <button className='navButton'>Register</button>
            
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;