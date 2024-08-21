import reverseString from '../js/reverse-string';

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
