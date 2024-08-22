import analyzeArray from '../js/analyze-array';

test('Returns the minimum element 1', () => {
  const input = [5, 3, 2, -8, 4, -1000, 99999];

  expect(analyzeArray(input).min).toBe(-1000);
});

test('Returns the minimum element 2', () => {
  const input = [5, 3, 2, -8, 4, 99999];

  expect(analyzeArray(input).min).toBe(-8);
});

test('Returns the maximum element 1', () => {
  const input = [5, 3, 2, -8, 4, -1000, 99999];

  expect(analyzeArray(input).max).toBe(99999);
});

test('Returns the maximum element 2', () => {
  const input = [5, 3, 2, -8, 4, -1000, Infinity];

  expect(analyzeArray(input).max).toBe(Infinity);
});

test('Returns the average 1', () => {
  const input = [5, 3, 2, -8, 4, -1000, 99999];

  expect(analyzeArray(input).average).toBeCloseTo(14143.57);
});

test('Returns the average 2', () => {
  const input = [5, 3, 2, -8, 4, -1000];

  expect(analyzeArray(input).average).toBeCloseTo(-165.67);
});

test('Returns the length 1', () => {
  const input = [5, 3, 2, -8, 4, -1000, 99999];

  expect(analyzeArray(input).length).toBe(7);
});

test('Returns the length 2', () => {
  const input = [5, 3, 2, -8, 4, -1000];

  expect(analyzeArray(input).length).toBe(6);
});

test('Returns null for min when array is empty', () => {
  const input = [];

  expect(analyzeArray(input).min).toBeNull();
});

test('Returns null for max when array is empty', () => {
  const input = [];

  expect(analyzeArray(input).max).toBeNull();
});

test('Returns null for average when array is empty', () => {
  const input = [];

  expect(analyzeArray(input).average).toBeNull();
});

test('Returns 0 for length when array is empty', () => {
  const input = [];

  expect(analyzeArray(input).length).toBe(0);
});
