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