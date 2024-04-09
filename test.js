// 마지막 원소가 그전 원소보다 크면 마지막원소-그전원소
// 마지막 원소가 그전 원소보다 크지않다면 마지막 원소*2
// function solution(num_list) {
//   let answer = [...num_list];
//   const lastEl = num_list[num_list.length - 1];
//   const reLastEl = num_list[num_list.length - 2];
//   if (lastEl > reLastEl) {
//     answer.push(lastEl - reLastEl);
//   } else {
//     answer.push(lastEl * 2);
//   }
//   return answer;
// }

// function solution(n, control) {
//   let result = n;
//   for (let i = 0; i < control.length; i++) {
//     switch (control[i]) {
//       case "w":
//         result += 1;
//         break;
//       case "s":
//         result -= 1;
//         break;
//       case "d":
//         result += 10;
//         break;
//       case "a":
//         result -= 10;
//         break;
//     }
//   }
//   return result;
// }

// 만약 후값-전값이 1이라면 w
// 만약 후값-전값이 -1이라면 s
// 만약 후값-전값이 10이라면 d
// 만약 후값-전값이 -10이라면 a
function solution(numLog) {
  let result = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    switch (numLog[i + 1] - numLog[i]) {
      case 1:
        result += "w";
        break;
      case -1:
        result += "s";
        break;
      case 10:
        result += "d";
        break;
      case -10:
        result += "a";
        break;
    }
  }
  return result;
}
