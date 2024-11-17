const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`;  // 'this' is not bound to the object
    }
  };
  
  console.log(person.getFullName()); // Output: undefined undefined (because 'this' does not refer to the object)
  