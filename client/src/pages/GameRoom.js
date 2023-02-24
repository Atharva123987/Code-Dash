import QuesBox from "../components/QuesBox";
import Question from "../components/Question";
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Timer from '../components/Timer'

function GameRoom({socket,username,roomId}) {
	
	const[code,setCode] = useState("This is the winners code")
	
	const displayCode = () =>{
		if(displayCode !== ""){
			const codeData = {
				roomId:roomId,
				author:username,
				code:code,
				
			}
		}
	}

	return (<>
		
		<Timer/>
		<div className="bg-slate-900 flex">
			<div className="w-2/6">
				<Question />
				<QuesBox/>
			</div>
			<div className="bg-red-300 w-3/6">
				<p>ndvjbkjrfjlk</p>
			</div>
			<div className="bg-red-500 w-1/6">
				<p>ndvjbkjrfjlk</p>
				<p>{code}</p>
			</div>
		</div>	
		</>
	);
}

export default GameRoom;