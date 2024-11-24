// Sample data (could be anything, like users or application settings)
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  // A simple function to display the users
  function displayUsers() {
    console.log("Displaying Users:");
    users.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
    });
  }
  
  // A function to add a new user
  function addUser(id, name, age) {
    const newUser = { id, name, age };
    users.push(newUser);
    console.log(`Added new user: ${name}`);
  }
  
  // Function to find a user by ID
  function findUserById(id) {
    const user = users.find(user => user.id === id);
    if (user) {
      console.log(`User found: ${user.name}, Age: ${user.age}`);
    } else {
      console.log('User not found!');
    }
  }
  
  // Run some operations on data
  console.log('Starting application...');
  displayUsers();
  addUser(4, 'David', 28);
  findUserById(2);
  
  // Running the app
  console.log('Application has finished running.');
  