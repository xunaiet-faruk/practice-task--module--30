// task -1
const name = `i am web developer
i love to code 
i love eat birani`;
console.log(name);



// task -2

function add(num1, num2 = 0) {
    const result = num1 + num2;
    return result;
}

const sum = add(5);
console.log(sum);


//task - 3

const namelist = ['junaiet', 'faruk', 'saim', 'gitti'];
const declarName = (names) => {

    const eventaddd = [];



    for (let name of names) {

        if (name.length % 2 == 1) {

            eventaddd.push(name);
        }

    }
    return eventaddd;
}

const naelistes = declarName(namelist);
console.log(naelistes);



// task -3


const input = (inp1, inp2) => {

    const comain = [...inp1, ...inp2];
    const combinateru = Math.max(...comain);
    return combinateru;

}

const nm1 = [2, 3, 100, 4, 6];
const nm2 = [5, 6, 8, 9];

const maxi = input(nm1, nm2);
console.log(maxi)


//  task - 4