const multiplier = {
    factor: 5,
    multiply: function(x) {
      return x * this.factor;
    },
    getMultiplier: function() {
      return this.multiply; // Returning the function itself
    }
  };
  
  const multiplyBy5 = multiplier.getMultiplier();
  console.log(multiplyBy5(10)); // Output: 50
  