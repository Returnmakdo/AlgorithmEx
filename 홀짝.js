let num = 4;
function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Odd";
  } else {
    answer = "Even";
  }
  return answer;
}

console.log(solution());
