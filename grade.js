// const grade = (score) => {
//   if (score >= 80 && score <= 100) {
//     console.log(`You got A with ${score} score`);
//   } else if (score >= 70) {
//     console.log(`You got B with ${score} score`);
//   } else if (score >= 60) {
//     console.log(`You got C with${score} score`);
//   } else if (score >= 50) {
//     console.log(`You git D with ${score} score`);
//   } else if (score == 0 || score > 100) {
//     console.log("Error");
//   } else {
//     console.log("You failed in the exam");
//   }
// };
// DID BY MY OWN

// grade(Math.round(79.8));

// Instructor solution
const grade1 = (score) => {
  const rounded = Math.round(score);
  if (rounded < 0 || rounded > 100) {
    console.log(`Please insert valid input`);
    return;
  }
  if (rounded >= 80) {
    console.log(`You got A with ${rounded} score`);
  } else if (rounded >= 70) {
    console.log(`You got B with ${rounded} score`);
  } else if (rounded >= 60) {
    console.log(`You got C with${rounded} score`);
  } else if (rounded >= 50) {
    console.log(`You git D with ${rounded} score`);
  } else {
    console.log("You failed in the exam");
  }
};
grade1(79.4);
