export default function createCalculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => {
      let result = a * b;
      if (!result) result = 0;

      return result;
    },
    divide: (a, b) => {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    },
  };
}
