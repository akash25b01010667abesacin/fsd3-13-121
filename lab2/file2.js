const { readFile } = require("fs/promises");

(async () => {
    const data = await readFile("stud.txt", "utf-8");
    console.log("file read successfully");
    console.log(data);
})();