const timer = {
    seconds: 0,
    startTimer: function() {
      setInterval(() => {
        this.seconds++; // Arrow function ensures 'this' refers to the timer object
        console.log(`Seconds: ${this.seconds}`);
      }, 1000);
    }
  };
  
  timer.startTimer(); // Starts the timer, logs seconds every second
