import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";



export default function App() {
    const roomID = "stresshogyaji";
    let myMeeting = async (element) => {
  
   // generate Kit Token
   const appID = 271221025;
   const serverSecret = "bbdef0a0858db581ac69d910592c6de6";
   const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Priyam");
  
   // Create instance object from Kit Token.
   const zp = ZegoUIKitPrebuilt.create(kitToken);
   // start the call
   zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
           mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
     });
    };
  
    return (
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '100vw', height: '100vh' }}
      ></div>
    );
  }