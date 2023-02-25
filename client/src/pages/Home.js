import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import bgImg from '../assets/code.jpg'
import React from 'react';
import {useState} from 'react'
import './home.css'
import io from 'socket.io-client'
import GameRoom from "./GameRoom";

const socket = io.connect("http://localhost:3001")
const Home = () =>{
  const [username, setUsername] = useState("")
  const [roomId, setRoomId] = useState("")
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };
  const joinRoom = () =>{
  socket.emit("join_room", [roomId,username]);// sending join_room request from front end to backend
  }

  function handleClick() {
    toggleVisibility();
    joinRoom();
  }


  const generateRoomId = () =>{
    setRoomId(Math.floor(Math.random() * 9000) + 1000)
  }
    // const roomId = `${window.location.href}room/${Math.floor(1000 + Math.random() * 9000)}`; // Replace with the actual room ID
    // const [link,setLink] = useState(roomId);

    

    // // const handleClick = () => {
    // //     // Generate a new link
    // //     const newLink = generateLink();
        
    // //     // Update the state with the new link
    // //     setLink(newLink);
    // //   };
    
    //   const generateLink = () => {
    //     // Generate a random link (for example)
    //     setLink(`${window.location.href}room/${Math.floor(1000 + Math.random() * 9000)}`);
    //   };

    return(
        <>
        <NavBar/>
        {isVisible? 
    <div className="home-body flex flex-col items-center  ">
      {/* <img src={bgImg} alt="Logo" style={{width:"110vh", }}/> */}
      <h1 className="text-4xl font-bold mb-4 mt-10 text-white">Welcome to Code Dash!</h1>
      
    
      <div className="box">
      <p className="text-white border-solid border-2 border-orange-50 p-5"><input maxLength={4}  type='text' value={roomId} style={{color:"black"}} onChange={(e)=>{setRoomId(e.target.value)}}/></p>
      <p className="text-white border-solid border-2 border-orange-50 p-5"><input   type='text' value={username} style={{color:"black"}} onChange={(e)=>{setUsername(e.target.value)}}/></p>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={generateRoomId}>Generate New Link</button>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={handleClick}>Join</button>

      {/* <GameRoom socket={socket} username={username} roomId={roomId}/> */}

    </div>
    </div>
      :<GameRoom socket={socket} username={username} roomId={roomId}/> }
        </>
    )
}
export default Home;


