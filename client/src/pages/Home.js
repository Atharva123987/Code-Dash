import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import bgImg from '../assets/code.jpg'
import React from 'react';
import {useState} from 'react'
import './home.css'

const Home = () =>{
    
    const [link, setLink] = useState("http://www.google.com");

    const handleClick = () => {
        // Generate a new link
        const newLink = generateLink();
    
        // Update the state with the new link
        setLink(newLink);
      };
    
      const generateLink = () => {
        // Generate a random link (for example)
        return `https://www.example.com/${Math.random().toString(36).substr(2, 5)}`;
      };

    return(
        <>
        <NavBar/>
    <div className="home-body flex flex-col items-center  ">
      {/* <img src={bgImg} alt="Logo" style={{width:"110vh", }}/> */}
      <h1 className="text-4xl font-bold mb-4 mt-10 text-white">Welcome to Code Dash!</h1>
      
    
      <div className="box">
      <p className="text-white border-solid border-2 border-orange-50 p-5"><a href={link}>{link}</a></p>
      <button className=" px-8 py-2 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-600" onClick={handleClick}>Generate New Link</button>
    </div>
    </div>
        </>
    )
}
export default Home;


