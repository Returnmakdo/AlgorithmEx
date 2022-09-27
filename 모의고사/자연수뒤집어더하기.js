function solution(n) {
  let result = "";
  let total = 0;
  n = n.toString().split("");
  let Num = n.reverse().map((i) => Number(i));
  for (let i = 0; i < Num.length; i++) {
    total += Num[i];
  }
  result = Num.join("+") + " = " + total;
  return result;
}

console.log(solution(1532576));
