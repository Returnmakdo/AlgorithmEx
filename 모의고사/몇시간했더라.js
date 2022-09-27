function solution(arr1, arr2) {
  let answer = [];
  let total = 0;
  for (let i = 0; i < 7; i++) {
    if (arr2[i] >= 29) {
      arr2[i] = 21;
    }
    answer.push(arr2[i] - arr1[i]);
    total += answer[i];
  }
  return total;
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2));
