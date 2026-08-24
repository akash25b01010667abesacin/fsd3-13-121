import { akdir } from "fs/promises";
// await akdir("upload");
// console.log("directory created successfully");

// await akdir("upload/resume");
// console.log("resume created under uppload folder");

await akdir("image/profile/logos",( { recursive: true }));
console.log("all folder created");