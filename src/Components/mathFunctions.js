function add(a, b) {
  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) {
    throw new Error("Invalid");
  }
  return a + b;
}

function divide(a, b) {
  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b))
    throw new Error("Invalid");

  return a / b;
}

function multiply(a, b) {
  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b))
    throw new Error("Invalid");
  return a * b;
}

function subtract(a, b) {
  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b))
    throw new Error("Invalid");
  return a - b;
}

export { add, divide, multiply, subtract };
