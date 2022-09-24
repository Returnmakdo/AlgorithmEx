let absolutes = [1, -10, 3];
let signs = ["true", "false", "false"];

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}

// 다른풀이
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    // 배열의 크기만큼 반복 수행
    if (signs[i] === true) {
      //signs의 값이 true이면 문자열"+"로 바꿔주고
      signs[i] = "+";
    } else {
      // false이면 문자열"-"로 값을 대치
      signs[i] = "-";
    }
    absolutes[i] = absolutes[i].toString(); //absolutes의 값들을 문자열로 변환
    absolutes[i] = signs[i] + absolutes[i]; //absolutes의 배열에 각 순번에 맞는 문자열"+" 혹은 "-"와 문자열로 변환한 숫자 absolutes를 합쳐서 대입
    absolutes[i] = parseInt(absolutes[i]); //대입한 값들을 다시 정수로 변환
    answer += absolutes[i]; //String에서 다시 integer로 변환한 absolutes의 정수값들을 answer에 축적하여 더함
  }
  return answer;
}

/* 
문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
입출력 예
absolutes	signs	result
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0
입출력 예 설명
입출력 예 #1

signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
따라서 세 수의 합인 9를 return 해야 합니다.
입출력 예 #2

signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
따라서 세 수의 합인 0을 return 해야 합니다.
*/
