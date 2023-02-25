const express = require("express");
const app = express();
const port = 1337;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
	console.log(req.body);
	res.json({ message: "Success" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
