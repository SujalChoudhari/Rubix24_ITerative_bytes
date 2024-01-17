import React from 'react'
import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"

export default function RoomPage() {
  const { roomId } = useParams();

  const myMeeting = async(element) =>{
    const appID = 1970816942;
    const serverSecret = "3618f8bfceb34f2a19710d02aa3ee8c7";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId, 
        Date.now().toString(),
        "Mihir Panchal"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks:[
          {
            name: 'Copy Link',
            url: `http://localhost:5173/room/${roomId}`,
          }
        ],
        scenario:{
            mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton: true,
    });
  };

  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

