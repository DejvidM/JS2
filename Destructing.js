const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
/* The name randomCar in the first const just gets the first value of the array and the second const gets the second value
of the array. */
console.log(randomCar)
console.log(otherRandomCar)


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
/* The code is going to throw an error because the variable name in first console.log is not defined */ 
console.log(name);
console.log(otherName);


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
/* The terminal will show the first const password and then show undefined because the person object doesnt have a password to deconstruct from */console.log(password);
console.log(hashedPassword);


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
/* The first console.log will print false because the first and second const are not equal but the second console.log will print true
because they are equal */
console.log(first == second);
console.log(first == third);


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
/* first console.log prints the string value, the second one prints the array,the third one prints the first value of the
array and the last one prints the second value of the array */
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

