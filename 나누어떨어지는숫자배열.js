function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b); // 오름차순 정렬 a가작으면 a를 앞으로 b가작으면 b가 앞으로
  return answer;
}

solution([5, 9, 7, 10], 5);
