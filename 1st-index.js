// let  =  Allow it Reason

// const  = do not allow it to reassign 


// const number  = 23;
//  number = 53;
//  console.log(number)

// const name ='junaiet';
// name ='faruk'
// console.log(name)

const Array = [12, 44, 67, 87, 45];
// reaasin not work 
// Array = [1, 2, 4, 5] 
Array.push(12, 34, 56, 78)
Array.pop();
// but design its work
console.log(Array);


const Object = { name: "junaiet", roll: 23 };
// Object ={ name : 'xunaiet'}
// resasign not work in const array
Object.name = "xunaiet faruk"
console.log(Object);

let sum = 0;
for (let i = 0; i < 10; i++) {
    const sumaa = i ;
    sum = sum + sumaa
}
console.log(sum)

// for under not allow to const only use let the for value is i++ up down 