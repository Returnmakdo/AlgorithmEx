function solution(s) {
  let answer = "";
  let words = s.split(" ").join("");
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      answer = answer + words[i].toLowerCase();
    } else {
      answer = answer + words[i].toUpperCase();
    }
  }
  return answer;
}
let s = "hang hae ninety nine";
console.log(solution(s));
