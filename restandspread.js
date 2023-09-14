const person = {
  name: "Parn",
  age: 18,
  address: "Rama 2",
};
const updateAddress = (obj, newAddress, newName) => {
  return { ...obj, address: newAddress, name: newName };
};
const personWithNewAddress = updateAddress(person, "Rama 9", "Pang");
console.log(personWithNewAddress);
