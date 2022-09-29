function solution(numbers) {
  let answer = 0;
  let leftNum = [];
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      leftNum.push(i);
    }
  }
  for (let i = Math.min(...leftNum); i <= Math.max(...leftNum); i++) {
    answer += i;
  }
  return answer;
}

let numbers = [1, 3, 5, 9, 2, 4, 8, 0];
console.log(solution(numbers));
