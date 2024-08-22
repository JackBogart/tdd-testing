const LOWERCASE_A_CODE = 'a'.charCodeAt(0);
const LOWERCASE_Z_CODE = 'z'.charCodeAt(0);
const UPPERCASE_A_CODE = 'A'.charCodeAt(0);
const UPPERCASE_Z_CODE = 'Z'.charCodeAt(0);

function getCharacterRange(char) {
  const charCode = char.charCodeAt(0);
  if (UPPERCASE_A_CODE <= charCode && charCode <= UPPERCASE_Z_CODE) {
    return [UPPERCASE_A_CODE, UPPERCASE_Z_CODE];
  }
  return [LOWERCASE_A_CODE, LOWERCASE_Z_CODE];
}

function isAlphabetic(char) {
  return /[A-Z]/i.test(char);
}

export default function caesarCipher(text, shiftAmount) {
  const normalizedShift = shiftAmount % 26;

  return text
    .split('')
    .map((char) => {
      if (!isAlphabetic(char)) {
        return char;
      }

      const [rangeStart, rangeEnd] = getCharacterRange(char);
      const shiftedCharCode = char.charCodeAt(0) + normalizedShift;

      if (shiftedCharCode > rangeEnd) {
        return String.fromCharCode(
          rangeStart + (shiftedCharCode % (rangeEnd + 1)),
        );
      } else if (shiftedCharCode < rangeStart) {
        return String.fromCharCode(
          rangeEnd + 1 - (rangeStart - shiftedCharCode),
        );
      }

      return String.fromCharCode(shiftedCharCode);
    })
    .join('');
}
