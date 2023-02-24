import { BrowserRouter,Route ,Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from './pages/About'
import GameRoom from "./pages/GameRoom";
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
   		 </Routes>
 		</BrowserRouter>
		</>
	);
}

export default App;
