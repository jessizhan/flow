function func(a) {
    return a + 10;

}

//forbidden: imports

// forbidden: exporting arrow function
module.exports.func2 = () => {
    console.log("test");
}

// forbidden: function aliasing
const func3 = func;

// forbidden: declaration after exports
function func4() {
    return 1;
}

// This overrides the privious exports
module.exports = {
    myfunction : func,
    myfunction4 : func4
}

