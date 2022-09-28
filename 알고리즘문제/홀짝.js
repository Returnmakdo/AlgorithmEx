/* 
문제 설명

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
제한 조건

num은 int 범위의 정수입니다.
0은 짝수입니다.
입출력 예

num	return
3	"Odd"
4	"Even"

*/

function solution(num) {
  return num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  // num이라는 매개변수를 받아와서 2로나눴을때의나머지가 0이면 Even, 0이아니면 Odd
}

console.log(solution(3));

//다른사람의 풀이
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
//뒤에 === 0 을 안붙이고 false값을 true값으로 넣어서 할수도 있었다.
