const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    getCarInfo: function() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  };
  
  console.log(car.getCarInfo()); // Output: 2020 Toyota Corolla
  