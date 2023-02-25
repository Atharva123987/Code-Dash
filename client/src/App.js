import { BrowserRouter,Route ,Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from './pages/About'
import GameRoom from "./pages/GameRoom";
import Discussion from "./pages/Discussion";
import React, { useState } from "react";
// import GameRoom from "./pages/GameRoom";

const App = ()=> {
	return (
		<>
		<BrowserRouter>
   		 <Routes>
     	 <Route path="/" element={<Home />} />
     	 <Route path="about" element={<About />} />
		  {/* <Route path="gameroom" element={<GameRoom />} /> */}
		  <Route path="/room/:roomId" element={<GameRoom/>}/>
		  <Route path="/discussion" element={<Discussion/>}/>
   		 </Routes>
 		</BrowserRouter>
		</>
	);
}

export default App;
