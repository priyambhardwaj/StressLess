import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../src/css/signup.css';



function Signup() {

  const navigate = useNavigate();



  const [isExpert, setIsExpert] = useState(false);



  const [userdata, setUserData] = useState({
    name: "",
    date: "",
    email: "",
    password: "",
    expertise: "",
    proof: ""
  })

  const { name,
    date,
    email,
    password,
    expertise,
    proof } = userdata

  const changeHandler = e => {
    setUserData({ ...userdata, [e.target.name]: [e.target.value] });
  }

  const handleSignup = async e => {
    e.preventDefault();
    // console.log(data);
    // console.log(data['username'][0]);
    // const userid = data;
    // console.log(userdata)
    userdata["isExpert"] = [isExpert];
    console.log(userdata)

    await fetch(`http://127.0.0.1:5001/register`,
        {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(async resData => {
            // Do something with the response data
            console.log(resData);
              navigate('/login');
            
            

        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
            alert("Connection Error!!")
        });

}

  return (
    <div className="signup">
      <div className="signup__left">
        <h1>Sign up</h1>
        <form onSubmit={handleSignup}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={changeHandler}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={changeHandler}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={changeHandler}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={changeHandler}
            />
          </label>
          {isExpert && (
            <>
              <label>
                Expertise:
                <input
                  type="text"
                  name="expertise"
                  id="expertise"
                  value={expertise}
                  onChange={changeHandler}
                />
              </label>
              <label>
                Proof:
                <input
                  type="file"
                  name="proof"
                  id="proof"
                  value={proof}
                  onChange={changeHandler}
                />
              </label>
            </>
          )}
          <button type="submit">Sign up</button>
        </form>


        <div className='switch1'>
          <p>Already have an account? <Link to={"/login"}><button >Login</button></Link> </p>
          <button onClick={() => setIsExpert(!isExpert)}>
            {isExpert ? "Switch to Regular Signup" : "Switch to Expert Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;

