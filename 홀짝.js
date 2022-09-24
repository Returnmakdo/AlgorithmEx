let num = 4;
function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

console.log(solution(4));
