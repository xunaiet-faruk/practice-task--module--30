const getage = (person) => person.age;
const sudents = { name: "junaiet", age: 23 };
const finale = getage(sudents);
console.log(finale);

//single parameter breaket and without braket

const getfirst = Number => Number[2];
const number = getfirst([12, 34, 56, 7, 8])
console.log(number);



// no parameter 

const getpi = () => Math.PI;
console.log(getpi())


// large arroow funtion 
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const total = sum + mul;
    return total;
}

const math = doMath(3, 5, 6);
console.log(math)