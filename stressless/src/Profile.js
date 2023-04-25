import React, { useEffect, useState } from 'react';
import "../src/css/Profile.css";
import pp from '../src/images/profilepicture.jpg';

const ProfilePage = () => {
  const loggedInName = localStorage.getItem('loggedInName');
  const loggedInEmail = localStorage.getItem('loggedInEmail');
  const loggedInDate = localStorage.getItem('loggedInDate');

  const [ageInYears, setAgeInYears] = useState('');

  useEffect(() => {
    // Calculate age from loggedInDate
    const dob = new Date(loggedInDate);
    const ageInMillis = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMillis);
    const age = Math.abs(ageDate.getUTCFullYear() - 2023);
    setAgeInYears(age);
  }, [loggedInDate]);


  const [user, setUser] = React.useState({
    name: loggedInName,
    email: loggedInEmail,
    age: '',
    occupation: "--xx--",
    interests: ["Reading", "Gaming", "Traveling"],
    jobOptions: ["--xx--", "Student", "Engineer", "Teacher", "Doctor", "Lawyer", "Others"],
  });


  

  
  const handleUpdate = (event) => {
    const { name, value } = event.target;
    if (name === 'interests') {
      const selected = Array.from(event.target.selectedOptions).map(option => option.value);
      setUser(prevState => ({
        ...prevState,
        interests: selected
      }));
    } else {
      setUser(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>
      <div className="pcard">
        <div className="pcard__left">
          <img src={pp} alt="Profile photo" />
        </div>
        <div>
          <div className='pcard__right'>
            <h1>USER DETAILS</h1>
            <form>
              <div className='pcard__right-details'>
                {/* <p>Name: {loggedInName}</p> */}
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleUpdate}
                />

              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleUpdate}
                />
                {/* <p>Email: {loggedInEmail}</p> */}
              </div>
              <div>
                <label htmlFor="age">Age: </label>
                <input
                  type="number"
                  name="age"
                  value={ageInYears}
                  onChange={handleUpdate}
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="occupation">Occupation: </label>
                <select
                  name="occupation"
                  value={user.occupation}
                  onChange={handleUpdate}
                  className="form-control"
                >
                  {user.jobOptions.map((job) => (
                    <option key={job} value={job}>
                      {job}
                    </option>
                  ))}
                </select>
              </div>


              <div className="pcard__button-wrapper">
                <button type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
