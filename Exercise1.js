// Question 1

let user = {
    name: "John",
    years: 30
};

let {
    name,
    years: age,
    isAdmin = false
} = user;
console.log(name); 
console.log(age);
console.log(isAdmin); 


// Question 2

let ourPlanet = "Earth";
let currentVisitor = "John";

// Question 3

let phrase = "Hello";
if (true) {
    let user = "John";
    function sayHi() {
       alert(`${phrase}, ${user}`);
    }
   
}

 sayHi();

/* it shows error because sayHi(); is outside the block, so JavaScript cannot find sayHi. 
instead of Alert we can use console.log to show the output in the console. */



// Question 4

let user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
delete user2.name;
console.log(user2.name);


// Question 5

const user3 = {
    name: "John"
};
user3.name = "Pete";
console.log(user3.name);
/* Yes it is possible to change the property of a const object */

// Question 6

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
};
let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
}
console.log(sum);

// Question 7
let a = 2;
let b = 1;
let result = (a + b < 4) ? "Below" : "Over";
console.log(result);

// Question 8
let login = "Employee";
let message = login == "Employee"
    ? "Hello"
    : login == "Director"
        ? "Greetings"
        : login == ""
            ? "No login"
            : "";

console.log(message)



