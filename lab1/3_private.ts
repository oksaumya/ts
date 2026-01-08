class Student {
  // Properties
  name: string;
  private age: number;

  // Constructor - runs when creating a new Student
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
let Student1 = new Student("Alice", 25);
let Student2 = new Student("Bob", 30);

console.log(Student1.greet());
console.log(Student2.age);
