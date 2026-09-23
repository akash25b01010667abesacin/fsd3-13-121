import express from "express";

const app = express();

//request goes here
app.get("/", (req, res) => {
    res.end("<h1>Hello Express</h1>");
});

//always listen 
app.listen(3333, () => console.log("prg1 is running on port 3333"));