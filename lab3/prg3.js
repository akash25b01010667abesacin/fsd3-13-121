import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.setHeader("content-type", "text/html");

        res.write(`
            <h1>My Water Collection</h1>

            <a href="/bottle">Bottle</a>
            <br><br>

            <a href="/pot">Pot</a>
        `);

        res.end();
    }

    else if (req.url === "/bottle") {

        res.setHeader("content-type", "text/html");

        const stream = createReadStream("water.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    }

    else if (req.url === "/pot") {

        res.setHeader("content-type", "text/html");

        const stream = createReadStream("pot.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    }

    else {

        res.statusCode = 404;
        res.setHeader("content-type", "text/html");

        res.end("<h1>404 - Page Not Found</h1>");
    }

});

server.listen(3000, () => {
    console.log("prg3 is running on http://localhost:3000");
});