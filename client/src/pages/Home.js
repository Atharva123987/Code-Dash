import NavBar from '../components/NavBar'
import React, { useEffect } from 'react';
import { useState } from 'react'
import './home.css'
import io from 'socket.io-client'
import GameRoom from "./GameRoom";
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'

const socket = io.connect("http://localhost:3001")

const Home = () => {
  const [username, setUsername] = useState("")
  const [roomId, setRoomId] = useState("")
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {

  })


  return (
    <>
      <NavBar />


      <section class="home-body  body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12 temp">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Start Coding! {'</>'} </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Join a room or Create one!
            </p>
          </div>
          {/* <div class="flex  lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-slate-300 transition-all active:bg-slate-600 active:text-white rounded text-lg"
              onClick={() => {
                if (isAuthenticated) console.log("USER is logged in ", user)
                else loginWithRedirect()
              }}
            ><FcGoogle />Sign in with Google</button>
            <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-slate-300 transition-all active:bg-slate-600 active:text-white rounded text-lg"><BsGithub />Sign in with GitHub</button>
              {
                isAuthenticated?(
                <button className="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-blue-300 rounded text-lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>

                ):
                <></>
              }

            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-white">Full Name</label>
              <input type="text" id="full-name" name="full-name" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-white">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-blue-300 rounded text-lg">Register</button>
          </div> */}
        </div>
      </section>
    </>
  )
}
export default Home;


