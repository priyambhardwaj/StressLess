import React, { useState, useEffect } from "react";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import '../src/css/videocall.css';

// The app ID and app sign of your zegocloud account
const appID = 271221025;
const appSign = "dbace24f5b3fc3b4fe1eead8298440d57ca752f5700901d114fb135f2aa65883";

// The room ID and user ID of the video call
const roomID = "stressless";
let userID = "Name";

// The ZegoExpressEngine instance
let engine;

// The ZegoUIKitPrebuilt instance
let uiKit;

export default function VideoCall() {
  // The state to indicate whether the user has joined the video call or not
  const [joined, setJoined] = useState(false);

  // Initialize the ZegoExpressEngine and ZegoUIKitPrebuilt instances
  useEffect(() => {
    engine = new ZegoExpressEngine(appID, appSign);
    uiKit = new ZegoUIKitPrebuilt(engine);
  }, []);

  // Handle the join button click event
  const handleJoin = () => {
    if (joined) {
      // Leave the video call
      uiKit.leaveRoom();
      setJoined(false);
    } else {
      // Join the video call
      userID = document.getElementById("userID").value;
      if (userID) {
        uiKit.joinRoom(roomID, userID);
        setJoined(true);
      } else {
        alert("Please enter your user ID");
      }
    }
  };

  return (
    <div className="video-call">
      <h1>StressLess Video Call</h1>
      <p>Please enter your user ID and click join to start the video call with an expert.</p>
      <input id="userID" type="text" placeholder="Enter your user ID" />
      <button onClick={handleJoin}>{joined ? "Leave" : "Join"}</button>
      <div id="zego-ui-kit-prebuilt"></div>
    </div>
  );
}
