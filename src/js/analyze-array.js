export default function analyzeArray(array) {
  if (array.length === 0) {
    return { average: null, min: null, max: null, length: 0 };
  }

  const { sum, min, max } = array.reduce(
    (acc, num) => {
      acc.sum += num;
      acc.min = Math.min(acc.min, num);
      acc.max = Math.max(acc.max, num);
      return acc;
    },
    { sum: 0, min: array[0], max: array[0] },
  );

  return { average: sum / array.length, min, max, length: array.length };
}
