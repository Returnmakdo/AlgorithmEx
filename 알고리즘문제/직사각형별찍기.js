// 입력값은 5 , 3 그러므로 a=5 b=3임
// 구구단과 유사함
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" "); // 2중for문을 사용하기위해 배열로 만듬
  const a = Number(n[0]), // a에는 data의 0번째 인덱스
    b = Number(n[1]); // b에는 data의 1번째 인덱스
  for (let i = 0; i < b; i++) {
    // 입력값 a=5, b=3인데 b줄만큼 출력해야하기 때문
    let star = "";
    for (let j = 0; j < a; j++) {
      // a개만큼 b줄이니깐 2중for문으로 a개만큼 찍기
      star = star + "*"; //출력할 변수에 별을 담는다
    }
    console.log(star); // 출력
  }
});

// 다른사람의 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
//2중for문을 사용하지 않고 repeat를 활용해도 풀 수 있었다.
