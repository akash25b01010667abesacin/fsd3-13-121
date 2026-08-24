// const writedata = (frame, contents) => {
    
// }
// const readdata = (frame) => {
// };
// await writedata("happy.exe","I am very happy");

// await readdata("happy.txt");

const { readFile, writeFile, appendFile, unlink } = require("fs/promises");

async function writeData(fname, contents) {
    await writeFile(fname, contents);
    console.log("File written");
}

async function readData(fname) {
    const data = await readFile(fname, "utf-8");
    console.log("File contents");
    console.log(data);
}

const appendData = async (fname, contents) => {
    await appendFile(fname, contents);
};

const deleteFile = async (fname) => {
    await unlink(fname);
    console.log(`${fname} deleted`);
};

(async () => {
    await writeData("happy.txt", "I am very happy");
    await readData("happy.txt");
    await appendData("happy.txt", "fsd is interesting");
    await readData("happy.txt");
    await deleteFile("happy.txt");
})();