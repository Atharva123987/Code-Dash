import QuesBox from "../components/QuesBox";

function Discussion() {
	

	return (
		<div className="w-2/4 mx-5">
        	<QuesBox/>
        <p className="font-bold text-2xl my-5 mx-5">Winner's Answer</p>
        <div className="bg-red-300 h-96 mx-5">
            <p>ndvjbkjrfjlk</p>
        </div>
        <div className="flex mx-5">
            <button className="rounded-full p-3 my-6 mr-96 ml-3 bg-amber-300">Editorial</button>
            <button className="rounded-full p-3 my-6 ml-80 bg-amber-300">WhiteBoard</button>
        </div>
        </div>
	);
}

export default Discussion;