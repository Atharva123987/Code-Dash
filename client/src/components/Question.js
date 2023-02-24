import React from 'react';

const Question = () => {
  return (
    <div className="flex flex-col h-2/4">
      <div className="p-4">
        <h1 className="text-2xl text-white font-bold mb-6">Coding Question</h1>
        <p className="text-white mb-6 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-lg font-bold mb-2 text-white">Sample Test Cases:</h2>
        <div className="bg-gray-100 rounded-md p-4">
          <p className="text-gray-700 font-bold mb-2">Test Case 1</p>
          <pre className="bg-gray-200 p-2 rounded-md">Input: 5, 6</pre>
          <pre className="bg-gray-200 p-2 rounded-md">Output: 11</pre>
        </div>
        <div className="bg-gray-100 rounded-md p-4 mt-4">
          <p className="text-gray-700 font-bold mb-2">Test Case 2</p>
          <pre className="bg-gray-200 p-2 rounded-md">Input: 10, 20</pre>
          <pre className="bg-gray-200 p-2 rounded-md">Output: 30</pre>
        </div>
      </div>
    </div>
  );
}

export default Question;