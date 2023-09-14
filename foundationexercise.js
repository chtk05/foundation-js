//Question1
// const mapRevertSign = (arr) => {
//   const member = [];
//   arr.forEach((element) => {
//     member.push(0 - element);
//   });
//   return member;
// };

// console.log(mapRevertSign([1, -2]));

//Question2 DONE
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseArr = (arr) => {
  const newMem = [];
  for (i = arr.length - 1; i >= 0; i--) {
    if (newMem) {
      newMem.push(arr[i]);
    }
  }
  return newMem;
};
console.log(reverseArr(arr1));

//question3 DONE
const isMember = (mem, arr) => {
  let correct = false;
  for (i = 0; i <= arr.length; i++) {
    if (mem === arr[i]) {
      correct = true;
    }
  }
  return correct;
};
console.log(isMember(5, arr1));

//Question4
const unique = (arr) => {
  for (let i = 0; i < arr.length; i++) {}
};

//Question5 DONE
let star1 = "";
const draw = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      star1 += "*";
    }
    console.log(star1);
    star1 = "";

    // console.log("\n");
  }
};
draw(5);
console.log("------------");

//Question6 DONE
let star = "";
const drawNg = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
    star = "";
    // console.log("\n");
  }
};
drawNg(5);

//Question7
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
// const mutual = (arr1, arr2) => {
//   const newArr = [];
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr1.length; i++) {
//       if (arr1[i] === arr2[j]) {
//         newArr.push(arr1[i]);
//       }
//     }
//     return newArr;
//   }
// };
// console.log(mutual(class1, class2));

//Question8 DONE
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20);

//Question9 DONE
const gcd = (a, b) => {
  let lcm = 0;
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      if (a % i === 0 && b % i === 0) {
        lcm = i;
      }
    }
  }
  return lcm;
};
console.log(`Greatest Common DIvisor : ${gcd(10, 15)}`);

//Question10 DONE
const filterLt = (n, arr) => {
  const newFilter = [];
  for (let i = 0; i <= arr.length; i++) {
    if (n > arr[i]) {
      newFilter.push(arr[i]);
    }
  }
  return newFilter;
};
// console.log("Array element  :",filterLt(6, arr1));

//Question11 DONE
const filterGt = (n, arr) => {
  const newFilter = [];
  for (let i = 0; i <= arr.length; i++) {
    if (n < arr[i]) {
      newFilter.push(arr[i]);
    }
  }
  return newFilter;
};
// console.log("New array element :", filterGt(6, arr1));

//Question13
const arr = [3, 2, 1, 12, 13, 11];
const meanArr = (item) => {
  let sum = 0;
  let mean = 0;
  for (let i = 0; i <= item.length; i++) {
    if (typeof item[i]) {
      sum = sum + item[i];
    }
  }
  return sum / item.length;
};
console.log(meanArr(arr1));

//Question15 DONE

arr.sort((num1, num2) => {
  return num1 - num2;
});

// console.log("New sorted array:", arr);

//Questionn 18
const arrOf1 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const flapMap = (...arr) => {
  arr.reduce((prev, cur) => {
    return [...prev, ...cur], [];
  });
};
console.log(flapMap(arrOf1));

//[].concat(...arr);
