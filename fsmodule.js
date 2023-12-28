const { isUtf8 } = require("buffer");
const { error, log } = require("console");
const fs = require("fs");

// fs.readFile('file.txt','utf8',(err,data) => {
//     console.log(err,data);
// })

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// fs.writeFile('file2.txt','This is a file for writing',() => {
//     console.log("written into the file");
// })

b = fs.writeFileSync('file2.txt','This is a file for working at it');
console.log(b);


console.log("Finished reading the file");