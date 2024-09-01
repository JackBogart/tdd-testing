import createCalculator from '../src/js/calculator';

const calculator = createCalculator();

test('add(1, 1) returns 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('add(-1, 1) returns 0', () => {
  expect(calculator.add(-1, 1)).toBe(0);
});

test('add(0.1, 0.2) returns 0.3', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('subtract(1, 1) returns 0', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test('subtract(-1, 1) returns -2', () => {
  expect(calculator.subtract(-1, 1)).toBe(-2);
});

test('subtract(0.3, 0.2) returns 0.1', () => {
  expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
});

test('multiply(2, 8) returns 16', () => {
  expect(calculator.multiply(2, 8)).toBe(16);
});

test('multiply(0, -8) returns 0', () => {
  expect(calculator.multiply(0, -8)).toBe(0);
});

test('multiply(-2, -8) returns 16', () => {
  expect(calculator.multiply(-2, -8)).toBe(16);
});

test('divide(1, 1) returns 1', () => {
  expect(calculator.divide(1, 1)).toBe(1);
});

test('divide(1, 2) returns 0.5', () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test('divide(3, 2) returns 1.5', () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test('divide(3, -2) returns -1.5', () => {
  expect(calculator.divide(3, -2)).toBeCloseTo(-1.5);
});

test('divide(3, 0.5) returns 6', () => {
  expect(calculator.divide(3, 0.5)).toBe(6);
});

test('divide(0.25, 2) returns 0.125', () => {
  expect(calculator.divide(0.25, 2)).toBeCloseTo(0.125);
});

test('divide(0.25, 0) throws an error', () => {
  expect(() => calculator.divide(0.25, 0)).toThrow(
    'Division by zero is not allowed',
  );
});

test('divide(1e10, 1e9) returns 10', () => {
  expect(calculator.divide(1e10, 1e9)).toBe(10);
});
