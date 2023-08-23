
//destructure 
const actors = {

    name: 'xunaiet',
    age: 20,
    phone: '01882239828'

}

const { phone, age: boyos } = actors;
console.log(boyos)


//array destracuting 

const numberss = [45, 56];
const [first, secoun] = numberss;
const [x, y] = [12, 12];


function dublled(a, b) {
    return [a * 2, b * 2]
}

const [fast, sec] = dublled(5, 10);
console.log(fast, sec);



const employe = {
    name: 'xunaiet',
    age: 12,
    college: 'chittagong',
    phone: '018822398282'
}

const { age, college } = employe;
console.log(age, college)