import QuesBox from "../components/QuesBox";
import Question from "../components/Question";
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3000")

function GameRoom() {
	

	return (
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
			</div>
		</div>	
	);
}

export default GameRoom;