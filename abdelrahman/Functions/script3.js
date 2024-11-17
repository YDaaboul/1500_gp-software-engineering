const student = {
    name: 'Alice',
    age: 21,
    greet: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
  
  console.log(student.greet()); // Output: Hello, my name is Alice and I am 21 years old.
  