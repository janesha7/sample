let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
//let num1 = parseFloat(input1);
//let num2 = parseFloat(input2);
if (isNaN(num1) || isNaN(num2)) {
  console.error(" Invalid input! Please enter valid numeric values.");
} else {
  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  let division; 
  let modulus;
  if (num2 !== 0) {
    division = num1 / num2;
    modulus = num1 % num2;
  } else {
    division = " Cannot divide by zero";
    modulus = " Cannot perform modulus by zero";
  }
  console.log(` Results for inputs: ${num1} and ${num2}`);
  console.log(` Addition: ${addition}`);
  console.log(` Subtraction: ${subtraction}`);
  console.log(` Multiplication: ${multiplication}`);
  console.log(` Division: ${division}`);
  console.log(`% Modulus: ${modulus}`);
  var resultMessage = " Calculation completed successfully!";
  if (num2 === 0) {
    resultMessage = " Calculation completed, but with division/modulus error!";
  }
  console.log(resultMessage);
}
