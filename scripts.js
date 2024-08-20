export function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function reverseString(input) {
  return input.split('').reverse().join('');
}
