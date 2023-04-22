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
        {/* {isVisible? 
    <div className="home-body flex flex-col items-center  ">
      <h1 className="text-4xl font-bold mb-4 mt-10 text-white">Welcome to Code Dash!</h1>
      
    
      <div className="box">
      <p className="text-white border-solid border-2 border-orange-50 p-5"><input maxLength={4} name="username"  type='text' value={roomId} style={{color:"black"}} onChange={(e)=>setRoomId(e.target.value)}/></p>
      <p className="text-white border-solid border-2 border-orange-50 p-5"><input   type='text' value={username} style={{color:"black"}} onChange={(e)=>{setUsername(e.target.value)}}/></p>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={generateRoomId}>Generate New Link</button>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={handleClick}>Join</button>


    </div>
    </div>
      :<GameRoom socket={socket} username={username} roomId={roomId}/> } */}

<section class="home-body  body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12 temp">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Start Coding! {'</>'} </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
      Join a room or Create one!
      </p>
    </div>
    <div class="flex  lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-slate-300 transition-all active:bg-slate-600 active:text-white rounded text-lg">Sign in with Google</button>
      <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-slate-300 transition-all active:bg-slate-600 active:text-white rounded text-lg">Sign in with GitHub</button>
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-white">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-blue-300 rounded text-lg">Register</button>
    </div>
  </div>
</section>
        </>
    )
}
export default Home;


