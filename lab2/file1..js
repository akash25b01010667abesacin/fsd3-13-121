import { writeFile } from "fs/promises";
await writeFile("stud.txt", "Name: akash");
console.log("file written successfully");