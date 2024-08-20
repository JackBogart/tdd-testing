import { capitalize, reverseString } from './scripts';

test('Capitalizes lowercase word', () => {
  const input = 'hello world';

  expect(capitalize(input)).toBe('Hello world');
});

test('Capitalizes lowercase word 2', () => {
  const input = 'bill cipher';

  expect(capitalize(input)).toBe('Bill cipher');
});

test('Capitalizes uppercase word 2', () => {
  const input = 'Bill cipher';

  expect(capitalize(input)).toBe('Bill cipher');
});

test('Reverses palindrome', () => {
  const input = 'racecar';

  expect(reverseString(input)).toBe('racecar');
});

test('Reverses palindrome 2', () => {
  const input = 'aba';

  expect(reverseString(input)).toBe('aba');
});

test('Reverses string', () => {
  const input = 'Gravity Falls';

  expect(reverseString(input)).toBe('sllaF ytivarG');
});
