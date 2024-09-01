import caesarCipher from '../js/caesar-cipher';

test('Shifts lowercase string 3 letters forwards', () => {
  const input = 'abc';

  expect(caesarCipher(input, 3)).toBe('def');
});

test('Shifts lowercase string 3 letters backwards', () => {
  const input = 'dfh';

  expect(caesarCipher(input, -3)).toBe('ace');
});

test('Shifts lowercase string 45 letters forwards', () => {
  const input = 'abc';

  expect(caesarCipher(input, 45)).toBe('tuv');
});

test('Shifts lowercase string 3 letters forwards with wrapping', () => {
  const input = 'xya';

  expect(caesarCipher(input, 3)).toBe('abd');
});

test('Shifts lowercase string 3 letters backwards with wrapping', () => {
  const input = 'bcd';

  expect(caesarCipher(input, -3)).toBe('yza');
});

test('Shifts uppercase string 3 letters forwards', () => {
  const input = 'ABC';

  expect(caesarCipher(input, 3)).toBe('DEF');
});

test('Shifts uppercase string 3 letters backwards with wrapping', () => {
  const input = 'ABC';

  expect(caesarCipher(input, -3)).toBe('XYZ');
});

test("Doesn't change non-alphabetical characters", () => {
  const input = 'Hello, World!';

  expect(caesarCipher(input, 3)).toBe('Khoor, Zruog!');
});

test('Shifts mixed string 10 letters backwards', () => {
  const input = 'GrAviTy faLLs';

  expect(caesarCipher(input, -10)).toBe('WhQlyJo vqBBi');
});
