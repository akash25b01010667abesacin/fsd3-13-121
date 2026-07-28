// const f1 = () => {
//     console.log('F1');
// }
// const f2 = () => {
//     console.log('F2');
// }
// const f3 = () => {
//     console.log('F3');
// }

// const main = () => {
//     console.log('main');
//     f1();
//     f2();
//     f3();
//     console.log('end');
// }

// main();

import {writeFile} from 'fs/promises';
const f1 = () => {
  
  console.log("F1");
};

const f2 = () => {
  
  console.log("F2");
};

const f3 = () => {
  console.log("F3");
};

const writeData = async () => {
    await writeFile('data.txt', 'i am fs module');
    console.log('file written');
};
const main = () => {
  console.log("main");
  f1();
  setTimeout(f2,5000);
// setInterval(f2,5000);
setImmediate(f3);
//   f3();
process.nextTick(f1);

  console.log("end");
  new Promise((resolve, reject) => {
      console.log("Promise");
      resolve();
  });
};

main();

