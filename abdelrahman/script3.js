// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      // Evaluate the expression and update the display
      display.value = eval(display.value);
    } catch (error) {
      // If there's an error in evaluation (e.g., syntax error), show "Error"
      display.value = 'Error';
    }
  }
  