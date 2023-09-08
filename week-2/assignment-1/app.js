// Function and Array

function max(numbers) {
  let len = numbers.length;
  let max = -Infinity;
  for (let i = 0; i < len; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
