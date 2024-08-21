import { capitalize, reverseString } from './scripts';

test('Does not change capitalized string', () => {
  const input = 'Hello world!';

  expect(capitalize(input)).toBe('Hello world!');
});

test('Capitalizes lowercase string', () => {
  const input = 'bill cipher';

  expect(capitalize(input)).toBe('Bill cipher');
});

test('Returns empty string if input is empty', () => {
  const input = '';

  expect(capitalize(input)).toBe('');
});

test('Reverses string', () => {
  const input = 'racecar';

  expect(reverseString(input)).toBe('racecar');
});

test('Reverses string 2', () => {
  const input = 'Gravity Falls';

  expect(reverseString(input)).toBe('sllaF ytivarG');
});

test('Returns empty string if input is empty', () => {
  const input = '';

  expect(reverseString(input)).toBe('');
});
