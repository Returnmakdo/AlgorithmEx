// 입력값은 5 , 3 그러므로 a=5 b=3임
// 구구단과 유사함
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    // b줄 만큼 반복
    let star = "";
    for (let j = 0; j < a; j++) {
      // 별을 한줄에 몇개 찍을지 반복
      star = star + "*"; //출력할 변수에 별을 담는다
    }
    console.log(star); // 출력
  }
});
