function solution(answers) {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const length = answers.length;

  for (let i = 0; i < length; i++) {
    // 예를들어 0%5 === 0 이고 1%5=== 1, 2%5===2 3%5===3 4%5===4 5%5===0 이런식으로 반복된다.
    // 그래서 supo[0]supo[1]supo[2]supo[3]supo[4] supo[0]supo[1]supo[2]supo[3]supo[4] supo[0]supo[1]supo[2]supo[3]supo[4]
    // 과 answer[i]의 값을 비교해서 맞는문제를 result에 플러스
    if (supo1[i % 5] === answers[i]) result[0]++; // answer의 길이만큼 돈값에 5(supo1의길이)로 나눴을때 나머지가 answer[i]이면 result[0]번째 배열 ++
    if (supo2[i % 8] === answers[i]) result[1]++;
    if (supo3[i % 10] === answers[i]) result[2]++;
  }
  const answer = [];
  const maxValue = Math.max(...result); // result에서 최대값들로 만들어준다.
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      // result[i]가 최대치인 max와 같을때 1을더해서 result에 넣어준뒤 반환
      answer.push(i + 1);
    }
  }
  return answer;
}
// %연산자는 패턴에 많이사용된다 (요일,홀짝 등등)
/* 
문제풀이세션 설명
function solution(answers) {
//1,2,3번 수포자들의 찍는 패턴을 배열 변수로 할당시킵니다.
const one = [1,2,3,4,5];
const two = [2,1,2,3,2,4,2,5];
const three = [3,3,1,1,2,2,4,4,5,5];

//results는 각 수포자들이 몇개의 문제를 맞췄는지 각 배열에 요소에 기입합니다.
//results[0] = 1번 수포자가 맞춘개수, results[1] = 2번 수포자가 맞춘개수, results[2] = 3번 수포자가 맞춘개수.
const results = [0,0,0];

//answers에 들어가 있는 각 문제의 답들을 수포자들이 맞췄는지 알기위해서
//answers의 길이만큼 반복문을 돌립니다.
for(let i = 0; i < answers.length; i++){

//첫번째 수포자가 각 문제를 맞추면 results[0]에 1씩 더합니다.
if(one[i%5] === answers[i]) results[0]++;

//두번째 수포자가 각 문제를 맞추면 results[1]에 1씩 더합니다.
if(two[i%8] === answers[i]) results[1]++;

//세번째 수포자가 각 문제를 맞추면 results[2]에 1씩 더합니다.
if(three[i%10] === answers[i]) results[2]++;
}

//1,2,3 수포자가 맞춘 개수중에 제일 많이 맞춘 개수를 구합니다.
const maxNum = Math.max(...results);
const answer = [];

//1,2,3 수포자중에 제일 많이 맞춘 수포자(들)을 찾아서 answer 배열에 내림차순으로 집어넣습니다.
for(let i = 0; i < results.length; i++){

//각 수포자들이 맞춘 문제의 개수와 제일 많이 맞춘 문제의 개수를 비교해서 같으면 answer 배열에 집어넣습니다.
//i+1이 각 수포자를 뜻합니다.
if(results[i] === maxNum) answer.push(i+1);
}

return answer;
}
*/

/*
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.
*/
