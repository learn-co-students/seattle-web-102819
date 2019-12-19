// Functions are First Class
const teaTime = function() {
  return true;
};

const notTeaTime = function() {
  return false;
};

//functions can return other functions

const outSide = function() {
  return function() {
    console.log("meow: let me back in");
  };
};

console.log(outSide());
console.log(outSide()());

//functions can be passed to other functions
let tea = "earl grey";
function makeTeaCallback(teaTime, tea) {
  if (teaTime()) {
    console.log(`it's tea time lets have some ${tea} and crumpets`);
  } else {
    console.log(`not time for tea`);
  }
}
makeTeaCallback(teaTime, tea);
makeTeaCallback(notTeaTime, tea);

//Where have you seen this before?

//Arrow Functions

const oneLineReturn = () => "i am an implicit return";
const oneVar = data => console.log(data);
const moreThanOne = (dataOne, dataTwo) => console.log(dataOne, dataTwo);

oneLineReturn();
oneVar("one var no ()");
moreThanOne("any more than one", "you need ()");

// const moreLines = () => (
//     console.log('this wont work')
//     return 'welp'
// )

const moreLines = () => {
  console.log("this wont work");
  return "welp";
};

//IIFE

const runNow = (function runNow() {
  console.log("it ran");
  return "it ran";
})();

//pure functions

const pureFunction = function(a, b) {
  return a + b;
};

const alsoPure = function(arr) {
  let oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
};

// Mutable vs Immutable

const nums = [1, 2, 3];

const destructivelyMutate = numArr => {
  for (let i = 0; i < numArr.length; i++) {
    numArr[i]++;
  }
  return numArr;
};

//vs

nums.map(n => n + 1); // [2, 3, 4]

///building a library

const sum = (a, b) => a + b;

function doMath(callback, secret) {
  return function(val) {
    return callback(secret, val);
  };
}

const product = (a, b) => a * b;
const doubleNumber = doMath(product, 2);
const tripleNumb = doMath(product, 3);
const add50 = doMath(sum, 50);
console.log(doubleNumber(50));
const add50andTriple = x => tripleNumb(add50(x));

//IIF
