function solution(phone_number) {
  let answer = "123456789";
  let hide_number = answer.slice(0, -4);
  let show_number = answer.slice(-4);
  let result = hide_number.replace(/[0-9]/g, "*") + show_number;
  return result;
}

let answer = "123456789";
let hide_number = answer.slice(0, -4);
let show_number = answer.slice(-4);
let result = hide_number.replace(/[0-9]/g, "*") + show_number;

console.log(result);
