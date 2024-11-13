"use strict";

const calculator = (num1, num2, operator) => {
  try {
    
    if (
      operator != "+" &&
      operator != "-" &&
      operator != "*" &&
      operator != "/"
    )
      throw new Error("Invalid operation");
    if (operator === "+") {
        console.log(num1 + num2)};
    if (operator === "-") {
        console.log(num1 - num2)};
    if (operator === "*") {
        console.log(num1 * num2)};
    if (operator === "/") {
        if (num2 === 0) throw new Error("You can't divide by zero");
        console.log(num1 / num2)
    };

  } catch (err) {
    console.error(err);
  }
};
calculator(10, 0, "+");
calculator(10, 2, "-");
calculator(10, 0, "/");
calculator(10, 2, "&");
