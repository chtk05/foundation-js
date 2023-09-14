const filterArray = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }
  return result;
};

const beforeFilter = [-1, 3, , 20, -24];
const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0;
});

// console.log(afterFilter);

// iterators
// froeach loop through each array
const prices = [20, 30, 40, 50];
prices.forEach((price, idx) => {
  console.log(idx, price);
});
// .map() return new array
const newPrices = prices.map((price) => {
  return price * 1.5;
});
console.log(newPrices);

//.filter() return filtered array
const updatePrice = newPrices.filter((price) => {
  return price > 30;
});

console.log(updatePrice);

//.reduce return
const sum = prices.reduce((prevVal, price) => {
  return prevVal + price;
});
console.log("Sum prices :", sum);

const newSum = prices.reduce((prevVal, price) => {
  return prevVal + price;
}, 10);
console.log("New sum price:", newSum);
