import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../src/css/newVC.css';

const NewVC = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate(); 

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`); // Use backticks for string interpolation
    }
    


    return (
        <div className="VC">
            <form onSubmit={handleFormSubmit} className="vcForm">
                <div>
                    <label>To join videocall</label>
                    <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter Room Code" />
                </div>
                <button type="submit">Enter Room</button>
            </form>
        </div>
    );
};


export default NewVC



