
// const myfile = require("./test2");

// console.log(myfile.myfunction(10));

const {myfunction, myfunction4} = require("./test2");

let x = myfunction(10);

const exampleVar = 1;

const examplefxn = (args) => {
    return args + 1;
},
examplefxn2 = (args) => {
    return args + myfunction4();
};

console.log(examplefxn(exampleVar));