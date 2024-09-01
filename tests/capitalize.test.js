import capitalize from '../src/js/capitalize';

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

test('Does not change string containing invalid character at the start', () => {
  const input = '#yolo';

  expect(capitalize(input)).toBe('#yolo');
});
