// const getSquare = (n) => {
//   return n * n;
// };

// const isEven = (n) => {
//   return n % 2 == 0;
// };

// let printFacts = (squareFunc, evenFunc, num) => {
//   const squareVal = squareFunc(num);
//   const isSquareEven = evenFunc(squareVal);
//   console.log();
// };

// Instructor demo code
const callMe = () => {
  console.log("Hello from call back function");
};

const greeting = (callback) => {
  console.log("Hello World!");
  callback();
};

greeting(callMe);
//anonymouse function as argument
greeting(() => {
  console.log("From arrow anonymous");
});

// const evenNum = (num) => {
//   console.log("Is it even");
//   num();
// };

// evenNum(() => {
//   console.log("WORLD");
// });

//odd even check

const oddEven = (number) => {
  return number % 2 == 0;
};

let printer = (evenFunc, num) => {
  const number1 = evenFunc(num);
  console.log(`${num} is ${number1}`);
};

printer(oddEven, 3);

//callback function with parameter
const greeting1 = (callback, names) => {
  const name1 = callback(names);
  console.log(`${names} is fine`);
  //   callback("PARN");
};

greeting1(callMe, "PARN");

//callback function with parameter
const greeting2 = (callback) => {
  console.log("Hello world");
  callback("Parn", 3);
};

greeting2((yourName, num1) => {
  console.log(`hello from ${yourName} and ${num1}`);
});

//callback with array
const originalArr = ["Parn", "Thailand", "Blue", "Flower"];

const loopThrough = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

loopThrough(originalArr, (place) => {
  console.log(`My details includes ${place}`);
});

//callback with arr and check even number
const secondArr = [1, 2, 3, 4, 5, 6];
const loopCheckEven = (arr1, callb) => {
  const evenNum = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      const newData = callb(arr1[i]);
      evenNum.push(newData);
    }
  }
  console.log("Even no:", evenNum);
  return evenNum;
};
const newEvenCheck = loopCheckEven(secondArr, (item) => {
  return `${item}`;
});

//Map array, manupulate arr
const mapArr = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }
  return result;
};

const newArr = mapArr(secondArr, (newnum) => {
  return (newnum += 3);
});
console.log(newArr);

console.log(newEvenCheck);
