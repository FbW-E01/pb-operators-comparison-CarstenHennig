// # Programming Basics: Comparison Operators

// These exercises are aimed at making you familiar with the comparison operators. **Print all your checks to the console.**

// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
let apples = 20;
let oranges = 30;
console.log("Apples: " + apples);
console.log("Oranges: " + oranges);

// 1. Check whether apples and oranges are equal.
console.log(apples === oranges);
const firstComparison = apples === oranges;
console.log("We have as many apples as oranges: " + firstComparison);

// 2. Check whether apples and oranges are *not* equal.
console.log(apples !== oranges);
const secondComparison = apples !== oranges;
console.log("We have NOT as many apples as oranges: " + secondComparison);

// 3. Check whether apples is greater than oranges.
console.log(apples > oranges);
const thirdComparison = apples > oranges;
console.log("We have MORE apples as oranges: " + thirdComparison);

// 4. Check whether apples is less than or equal to oranges.
console.log(apples <= oranges);
const fourthComparison = apples <= oranges;
console.log("We have LESS THAN OR as many apples as oranges: " + fourthComparison);

// 5. Check whether oranges is greater than apples.
console.log(oranges > apples);
const fifthComparison = oranges > apples;
console.log("We have MORE oranges than apples: " + fifthComparison);

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, 
// and check whether this result is greater than mangoes added to oranges.
let mangos = 5;
let result = mangos * apples;
console.log(result > mangos + oranges);
const sixthComparison = result > mangos + oranges;
console.log("We have more mangos multiplied with apples than mangos plus oranges: " + sixthComparison);

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
let nextResult = apples - mangos;
console.log(nextResult < oranges / mangos);
const seventhComparison = nextResult < oranges / mangos;
console.log("This comparison is: " + seventhComparison);

// 8. Check whether mangoes, apples and oranges are equal.
console.log(mangos == apples == oranges);

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log(apples&mangos === oranges%mangos);

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. 
// If it is not, find an operator which will give a result of true.
console.log(mangos+apples > oranges-mangos);
console.log(mangos+apples >= oranges-mangos);

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
/* almost done */