import NavBar from '../components/NavBar'
import React, { useEffect } from 'react';
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

    useEffect(()=>{
      socket.on("receive_room",(data)=>{
        console.log(`Welcome ${data} to room ${data} `)
      })  
    },[socket])

    return(
        <>
        <NavBar/>
        {isVisible? 
    <div className="home-body flex flex-col items-center  ">
      <h1 className="text-4xl font-bold mb-4 mt-10 text-white">Welcome to Code Dash!</h1>
      
    
      <div className="box">
      <p className="text-white border-solid border-2 border-orange-50 p-5"><input maxLength={4} name="username"  type='text' value={roomId} style={{color:"black"}} onChange={(e)=>setRoomId(e.target.value)}/></p>
      <p className="text-white border-solid border-2 border-orange-50 p-5"><input   type='text' value={username} style={{color:"black"}} onChange={(e)=>{setUsername(e.target.value)}}/></p>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={generateRoomId}>Generate New Link</button>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={handleClick}>Join</button>


    </div>
    </div>
      :<GameRoom socket={socket} username={username} roomId={roomId}/> }
        </>
    )
}
export default Home;


