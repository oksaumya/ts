// let value1: any = 10;
// value1 = "Hello";
// value1 = true;
// console.log(value1.length)
// console.log(value1)

let value1: unknown = 10;
value1 = "Hello";
value1 = true;
console.log((value1 as string).length)
console.log(value1)

// unknown type is similar to any type, but is safer because it requires type assertions or type narrowing before performing operations on the value.