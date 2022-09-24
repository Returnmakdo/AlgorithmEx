function solution(price, money, count) {
  let answer = -1;
  let total = []; // total이라는 배열 선언 (놀이기구를 count번 탔을때의 금액의 배열)
  let totalSum = 0; // 총합이 들어갈 변수 선언
  for (let i = 0; i < count + 1; i++) {
    // i에 1을넣거나 count+1 하거나 상관 X
    total.push(price * i); // 금액은 1번 타면 탈수록 price의 배수로 증가 -> total배열에 push
  }
  for (let j = 1; j < total.length; j++) {
    // total의 0번째인덱스값은 항상 0이기 때문에 1번인덱스부터 받기
    totalSum += total[j]; // 배열의 총합 -> totalSum에 대입
  }
  if (money - totalSum > 0) {
    answer = 0;
  } else {
    answer = Math.abs(totalSum - money); //절대값
  }

  return answer;
}

// 다른사람의 풀이... 가우스 공식 사용 .. 다들 삼항연산자를 많이 사용했던데 생각을 하지 못했다.
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

console.log(solution(5, 20, 6));

// price는 이용료, count는 얼마나탔는지, money는 현재가진돈

/* 
문제 설명
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

제한사항
놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
입출력 예
price	money	count	result
3	20	4	10
입출력 예 설명
입출력 예 #1
이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

참고 사항
미션 언어는 Java, JavaScript, Python3, C++ 만 해당 됩니다.
같은 코드를 제출한 사람이 여럿이라면 코드를 가장 먼저 제출한 분께 상품을 드립니다.
좋아요 수가 동일할 경우 코드를 가장 먼저 제출한 분께 상품을 드립니다.
*/
