function solution() {
  let totalSum = 0;
  let array = [1, 2, 3, 4, 5];

  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }

  let result = totalSum / array.length;
  return result;
}

console.log(solution());
