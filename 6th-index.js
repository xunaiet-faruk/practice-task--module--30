
// spread operator (...)
const math = Math.max(2, 4, 66, 78, 20);
const numbers = [23, 56, 88, 90, 34];
const arramax = Math.max(...numbers);
console.log(arramax);


// spread operator copy 

const friends = [4, 5, 7, 13];
const bondo = friends;
const dostoh = [...friends]
friends.push(900);
console.log(dostoh);
console.log(friends);

const snkaa = [...friends, 100];
console.log(snkaa);

// opreer example copy ar
let numbersss = [3, 4, 5];
let allnumbers = [12, 34, ...numbers, 23, 43];
console.log(allnumbers)