// Traditional functions
function func() {
  return 1;
}

// Arrow functions
const func = (parameter1, parameter2) => {
  return 1;
}

func();

// Classes
class ThisIsAClass {

}

// Template Strings
const template = "Test";
const templateString = `This is a ${template}`;

// Destructuring
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const Person = {
  name: "Buzz",
  age: 20,
  grades: 98,
  mother: {
    ageMother: 90
  },
}

Person.name;

function Test({ name, age }) {
  console.log(name + " " + age);
}

Test(person);

