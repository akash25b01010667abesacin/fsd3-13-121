import http  from "http";

const server = http.createServer((req,res) => {
    res.write("Hello Client");
    res.end();
});

server.listen(4444, () => console.log("Server is running on port 4444"));