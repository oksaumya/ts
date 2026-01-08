class Teacher {
  // Properties
  name: string;
  readonly age: number;

  // Constructor - runs when creating a new Teacher
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

// Create instances
let Teacher1 = new Teacher("Alice", 25);
let Teacher2 = new Teacher("Bob", 30);

console.log(Teacher1.greet());
console.log(Teacher2.age);

// Teacher2.age = 5;
console.log(Teacher2.age);