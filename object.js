// const person = {
//   name: "Parn",
//   age: 23,
//   likes: {
//     food: "Noodle",
//     color: "blue",
//     number: 7,
//   },
// };

// const keyName = "name";
// console.log("Name: ", person.name);
// console.log("Name: ", person[keyName]); // acccess using [] ,

// const person2 = person;
// person2.name = "PARN";
// console.log("person 1: ", person);
// console.log("person 2: ", person2);

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];
data.forEach((val, idx) => {
  console.log(
    "Person ",
    idx + 1,
    "\nName: ",
    val.name,
    "\nAge :",
    val.age,
    "\nJob: ",
    val.job
  );
});

data.forEach((val, idx) => {
  console.log(
    `Person ${idx + 1} \nName: ${val.name} \nAge: ${val.age} \nJob: ${
      val.job
    } \n--------`
  );
});

// data.reduce((prev, val, idx) => {
//   console.log(
//     `${prev}\nPerson ${idx + 1} \nName: ${val.name} \nAge: ${val.age} \nJob: ${
//       val.job
//     }`
//   );
// }, "");
