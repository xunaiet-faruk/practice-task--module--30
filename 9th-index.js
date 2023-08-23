const numbers = [1, 6, 8, 10];

for (let num of numbers) {
    console.log(num)
}

const name = "xunaiet faruk";
for (let keyss of name) {
    console.log(keyss);
}


const objectt = {
    name: 'junaiet',
    age: 50,
    distric: 'chittaagong'
}

for (let key in objectt) {
    const value = objectt[key];
    console.log(key, value)
}

const keys = Object.keys(objectt);

for (const key of keys) {
    const value = objectt[key]
    console.log(key, value)
}