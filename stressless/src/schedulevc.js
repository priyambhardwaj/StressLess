import React, { useState } from 'react';
import '../src/css/schedulevc.css';

function ScheduleVideoCall() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const key = generateRandomKey();
    setRoomCode(key);
  
    try {
      const response = await fetch('http://127.0.0.1:5001/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date, time, roomCode: key }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateRandomKey = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(roomCode);
    alert(`Room code ${roomCode} copied to clipboard!`);
  };

  return (
    <div className="card-schedule">
      <h1>SCHEDULE A CALL</h1>
      <form onSubmit={handleSubmit}>
        <label className="left-label">
          Name:
          <input className="input-field" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="left-label">
          Email:
          <input className="input-field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label className="left-label">
          Date:
          <input className="input-field" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label className="left-label">
          Time:
          <input className="input-field" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
        </label>
        <button type="submit">Schedule Video Call</button>
      </form>
      {roomCode && (
        <div className='roomcode'>
          <p>Your room code is: {roomCode}</p>
          <button onClick={handleCopyClick}>Copy Room Code</button>
          <p>Please copy this code and use it later to join the video call.</p>
        </div>
      )}
    </div>
  );
}

export default ScheduleVideoCall;
