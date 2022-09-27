let num = 4;
function solution(num) {
  let answer = "";
  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  return answer;
}

console.log(solution(3));
