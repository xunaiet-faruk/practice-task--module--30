const array = {
    name: 'xunaiet',
    age: 20,
    mobaile: '0188822340',
    iscleaned: true
}

const keys = Object.keys(array);
// console.log(keys);

const vlaue = Object.values(array);
// console.log(vlaue);

// entires set a new array in every element
const entirs = Object.entries(array);
// console.log(entirs);


//delet object property 
delete array.iscleaned;
// console.log(array);


// anothe way to delete object use destruction

const { iscleaned, ...namearray } = array;
// console.log(namearray);

const element = Object.freeze(array);
array.sourece = "bangladesh";
// console.log(array);


// seal 

const neasea = Object.seal(array);
array.country = "china";
array.age ='015'
console.log(array)