import React, { useState } from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
import AceEditor from "react-ace";
import axios from "axios";
import qs from "qs";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function GameRoom() {
	const [currentLanguage, setCurrentLanguage] = useState("python");
	const [newValue, setNewValue] = useState("");
	let ans = [];
	let count = 0;

	function latestCode(val) {
		setNewValue(val);
		// console.log(newValue);
	}
	function submitCode() {
		var cases = [7, 10, 40, 56];
		ans = [];
		var rightAnswers = ["odd\n", "even\n", "even\n", "odd\n"];
		for (var i = 0; i < 4; i++) {
			testCase(cases[i], i, rightAnswers[i]);
			// setTimeout(function () {
			// 	console.log("waiting for update");
			// }, 5000);
		}
		if (count === cases.length) {
			console.log("You have passed all the test cases");
		} else {
			console.log(
				"You have passed " +
					count +
					" out of " +
					cases.length +
					" tests"
			);
		}
	}
	const testCase = (c, i, r, count) => {
		if (currentLanguage === "python") {
			setCurrentLanguage("py");
		} else if (currentLanguage === "javascript") {
			setCurrentLanguage("js");
		}

		var send = qs.stringify({
			code: newValue,
			language: currentLanguage,
			input: c,
		});

		var config = {
			method: "post",
			url: "https://api.codex.jaagrav.in",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			data: send,
		};

		axios(config)
			.then((response) => {
				var output = response.data.output;
				console.log("updating ans");
				ans.push(output);
				console.log(output);
				console.log(r);
				if (output === r) {
					count++;
				}
				console.log(count);
				// return output;
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<div>
				<select
					name="language"
					id="language"
					onChange={(e) => setCurrentLanguage(e.target.value)}
				>
					<option value="python">Python</option>
					<option value="javascript">JavaScript</option>
					<option value="java">Java</option>
					<option value="c">C</option>
					<option value="cpp">C++</option>
				</select>
			</div>
			<AceEditor
				mode={currentLanguage}
				theme="monokai"
				onChange={latestCode}
				name="editor-component"
				editorProps={{ $blockScrolling: true }}
			/>
			<button onClick={submitCode}>Submit</button>
		</>
	);
}
export default GameRoom;
