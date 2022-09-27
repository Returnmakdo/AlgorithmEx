function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i; // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));

/*
제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.

입출력 예
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6

입출력 예 설명

입출력 예 #1
5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

입출력 예 #2
1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

없는숫자 배열의 합을 변수에 넣어준다.
없는건 어케찾을까

일단 모든 원소는 1,2,3,4,5,6,7,8,9,0 이렇게 10개
numbers배열 길이는 1~9 사이
*/
