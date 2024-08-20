import { capitalize } from './scripts';

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
