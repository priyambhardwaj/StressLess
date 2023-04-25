import React, { useState } from 'react';
import logo from '../src/images/new.png';
import { useNavigate, Link } from "react-router-dom";
import '../src/css/login.css';

function Login() {
  const [isExpert, setIsExpert] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInName, setLoggedInName] = useState(''); // Added state variable for storing name
  const [loggedInEmail, setLoggedInEmail] = useState(''); // Added state variable for storing email
  const [loggedInDate, setloggedInDate]=useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };



  const handleExpertChange = () => {
    setIsExpert(!isExpert);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here
    const formData ={
      email:email,
      password:password,
      isExpert:isExpert
    }
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      console.log(data);
      if(response.ok){
        if(isExpert){
          navigate('/HomeExpert');
        }
        else{
          navigate('/');
        }
        setLoggedInName(data.name); // Set the loggedInName state variable with the name
        setLoggedInEmail(email); // Set the loggedInEmail state variable with the email
        setloggedInDate(data.date);
        localStorage.setItem('loggedInName', data.name);
        localStorage.setItem('loggedInEmail', email);
        localStorage.setItem('loggedInDate', data.date);
      }
    } catch (error) {
      console.error(error);
    };
  };
  


  return (
    <div className="login">
      <div className="login__left">
        <img src={logo} alt="Stressless" />
        <h1>Stressless</h1>
      </div>
      <div className="login__right">
        <h2>{isExpert ? 'Expert' : 'User'} {isLoggingIn ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          
          <input type={passwordShown ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{isExpert ? 'Expert' : 'User'} {isLoggingIn ? 'Login' : 'Signup'}</button>
        </form>
        

        <div className='switch'>
        <p>Don't have an account? <Link to={"/signup"}><button >Sign-up</button></Link></p>
        <button onClick={handleExpertChange}>
              Switch to Expert Login
            </button>
        </div>
      </div>
    </div>
  );
}         

export default Login;
