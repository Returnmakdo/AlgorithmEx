function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); // numbers[i]로 split 해준값을 넣어줍니다
    answer = arr.join(i); // answer의i값을 join해준다.
    /*
    [ 'one4seveneight' ]
    [ '', '4seveneight' ]
    [ '14seveneight' ]
    [ '14seveneight' ]
    [ '14seveneight' ]
    [ '14seveneight' ]
    [ '14seveneight' ]
    [ '14', 'eight' ]
    [ '147', '' ]
    [ '1478' ]
    */
  }

  return Number(answer);
}
solution("one4seveneight");
