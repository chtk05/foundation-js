// FOR LOOP
const normalLoop = () => {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
};
// normalLoop();

const reverseLoop = () => {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
};
// reverseLoop();

const loopArray = () => {
  const place = ["SG", "Bali", "MY"];
  for (let i = 0; i < place.length; i++) {
    console.log(place[i]);
  }
};
// loopArray();

//reverse loop through ARRAY
const reverseArr = () => {
  const placeGo = ["MY", "Thailand", "Aus"];
  //   for (let i = placeGo.length - 1; i >= 0; i--) {
  //     console.log(placeGo[i]);
  //   }
  //continue keyword
  for (let i = 0; i < placeGo.length; i++) {
    if (placeGo[i] === "Thailand") {
      continue;
    }
    console.log(placeGo[i]);
  }
};
reverseArr();

//While LOOP
const whileLoop = () => {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
};
whileLoop();

let count = 1;
while (count < 100) {
  count += 2;
}
console.log(`Count final value is ${count}`);

//Nested Loop
const nestedLoop = () => {
  for (let i = 0; i < 3; i++) {
    console.log("i", i);
    for (let j = 0; j < 3; j++) {
      console.log("j", j);
    }
  }
};

// nestedLoop();

const oddEven = () => {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is EVEN `);
    } else {
      console.log(`${i} is ODD`);
    }
  }
};
oddEven();
