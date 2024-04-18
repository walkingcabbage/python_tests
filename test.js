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
// function solution(numLog) {
//   let result = "";
//   for (let i = 0; i < numLog.length - 1; i++) {
//     switch (numLog[i + 1] - numLog[i]) {
//       case 1:
//         result += "w";
//         break;
//       case -1:
//         result += "s";
//         break;
//       case 10:
//         result += "d";
//         break;
//       case -10:
//         result += "a";
//         break;
//     }
//   }
//   return result;
// }

// arr는 정수
// queries는 2차원 정수배열
// query는 [i,j] 꼴의 배열
// arr의 i값과 j값을 바꾸는 함수
// function solution(arr, queries) {
//   let array = [...arr];
//   queries.forEach((query) => {
//     let tmp = 0;
//     [i, j] = query;
//     tmp = array[i];
//     array[i] = array[j];
//     array[j] = tmp;
//   });
//   return array;
// } // 구조분해할당을 사용한다면 손쉽게 값 swiching이 가능하다.

// [s,e,k] 꼴의 배열
// s부터 e 까지 돌면서 k보다 큰 수를 찾기
// 없다면 -1 대입
// function solution(arr, queries) {
//   const array = [...arr];
//   let resultArr = [];
//   queries.forEach((query) => {
//     const [s, e, k] = query;
//     let nums = [];
//     for (i = s; i <= e; i++) {
//       if (array[i] > k) {
//         nums.push(array[i]);
//       }
//     }
//     if (nums.length === 0) {
//       resultArr.push(-1);
//     } else resultArr.push(Math.min(...nums));
//   });
//   return resultArr;
// }

// queries 반복문 돌릴거.
// query 또 돌릴거.
// 돌리면서 i가 k의 배수 확인하고 arr[i]에 +1
// 반환.
// function solution(arr, queries) {
//   let result = [...arr];
//   queries.forEach((query) => {
//     const [s, e, k] = query;
//     for (i = s; i <= e; i++) {
//       if (i === 0 || i % k === 0) {
//         result[i]++;
//       }
//     }
//   });
//   return result;
// }

// 정수 l, r 매개변수
// l이상 r이하 정수 중에서만 생각
// '0','5' 로만 이루어져 있어야함
// 오름차순 ㄱ.
// 그전 정수 없으면 -1만 반환 ㄱ.
// function solution(l, r) {
//   const regex = /^(0|5)+$/;
//   let result = [];
//   for (i = l; i <= r; i++) {
//     if (regex.test(String(i))) {
//       result.push(i);
//     }
//   }
//   if (!result.length) {
//     result.push(-1);
//   }
//   return result;
// }

// function solution(start_num, end_num) {
//   let result = [];
//   for(i=start_num;i<=end_num;i++){
//     result.push(i);
//   }
//   return result;
// }

// function solution(n) {
//   let answer = [];
//   let num = n;
//   while (num !== 1) {
//     if (num % 2 === 0) {
//       answer.push(num);
//       num /= 2;
//     } else {
//       answer.push(num);
//       num = 3 * num + 1;
//     }
//   }
//   answer.push(1);
//   return answer;
// }

// function solution(arr) {
//   let stk = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (!stk.length) {
//       stk.push(arr[i]);
//       i++;
//     } else if (stk[stk.length - 1] < arr[i]) {
//       stk.push(arr[i]);
//       i++;
//     } else if (stk[stk.length - 1] >= arr[i]) {
//       stk.pop();
//     }
//   }
//   return stk;
// }

// function solution(x1, x2, x3, x4) {
//   return (x1 || x2) && (x3 || x4);
// }

// 수 전부 같으면 => 1111 * p
// 세 수가 같고 하나만 다르면 => (10*p+q)*(10*p+q)
// 두 개씩 같은 값 => (p+q)*|p-q|
// 두 개가 같고(p) 각각 다르면(q,r) => q*r
// 전부 다르면 => 가장 작은 수
// sort
// function AscSorting(arr) {
//   return arr.sort((a, b) => a - b);
// }

// function solution(a, b, c, d) {
//   const diceArr = [a, b, c, d];
//   const dice = {
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//   };
//   diceArr.forEach((val) => {
//     dice[val]++;
//   });
//   const counts = Object.values(dice).filter((item) => item !== 0);
//   let p = 0;
//   let q = 0;
//   let r = 0;
//   //모두 같을 때
//   if (counts.includes(4)) {
//     p = Object.keys(dice).filter((key) => dice[key] !== 0)[0];
//     return 1111 * p;
//   }
//   //3개가 같고 1개만 다를 때
//   if (counts.includes(3) && counts.includes(1)) {
//     p = Object.keys(dice).filter((key) => dice[key] === 3)[0];
//     q = Object.keys(dice).filter((key) => dice[key] === 1)[0];
//     return (10 * Number(p) + Number(q)) ** 2;
//   }
//   //2개 같고 2개 같을 때
//   if (counts.includes(2) && !counts.includes(1)) {
//     p = Object.keys(dice).filter((key) => dice[key] === 2)[0];
//     q = Object.keys(dice).filter((key) => dice[key] === 2)[1];
//     return (Number(p) + Number(q)) * Math.abs(Number(p) - Number(q));
//   }
//   //2개 같고 1개 1개 각각 다를 때
//   if (counts.includes(2) && counts.includes(1)) {
//     p = Object.keys(dice).filter((key) => dice[key] === 2)[0];
//     q = Object.keys(dice).filter((key) => dice[key] === 1)[0];
//     r = Object.keys(dice).filter((key) => dice[key] === 1)[1];
//     return Number(q) * Number(r);
//   }
//   //전부 다를 때
//   if (counts.length === 4 && counts.includes(1)) {
//     const validArr = Object.keys(dice)
//       .filter((key) => dice[key] !== 0)
//       .map((item) => Number(item));
//     return Math.min(...validArr);
//   }
// }

// function solution(my_string, index_list) {
//   return index_list
//     .map((item) => {
//       return my_string[item];
//     })
//     .join("");
// }

// function solution(number) {
//   let sum=0;
//   [...number].forEach(num=>{
//     sum+=Number(num)
//   })
//   return sum%9
// }

// function solution(my_string, queries) {
//   let result = [...my_string];
//   for (const item of queries) {
//     const slicedArr = result.slice(item[0], item[1] + 1).reverse();
//     slicedArr.forEach((val, idx) => {
//       result[idx + item[0]] = val;
//     });
//   }
//   return result.join("");
// }

// intStrs 돌면서 각요소의
// s로부터 l번째까지의 문자열만 추출해서
// k보다 큰 값만 모아 새로운 문자열 생성
// function solution(intStrs, k, s, l) {
//   return intStrs
//     .map((item) => {
//       const num = [...item].splice(s, l).join("");
//       return Number(num);
//     })
//     .filter((item) => {
//       return item > k;
//     });
// }

// function solution(my_strings, parts) {
//   return my_strings
//     .map((str, idx) => {
//       const [s, e] = parts[idx];
//       return str.slice(s, e + 1);
//     })
//     .join("");
// }

// function solution(my_string, n) {
//   return my_string.slice(my_string.length - n);
// }

// function solution(my_string) {
//   const arr = [...my_string];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr.slice(-1 - i).join(""));
//   }
//   return result.sort();
// }
//굳이 배열로 바꾼 후 slice 하지말고 문자열 상태에서 substring 사용하자.

// function solution(my_string, is_suffix) {
//   const arr = [...my_string];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr.slice(-1 - i).join(""));
//   }
//   return result.includes(is_suffix) ? 1 : 0;
// }

// function solution(my_string, n) {
//   return my_string.substring(0, n);
// }

// function solution(my_string, is_prefix) {
//   return [...my_string]
//     .map((_, idx) => {
//       return my_string.substring(0, idx+1);
//     })
//     .includes(is_prefix)
//     ? 1
//     : 0;
// }

// function solution(my_string, s, e) {
//   const result = [...my_string];
//   const copiedArr = [...my_string].slice(s, e + 1).reverse();
//   for (i = s; i <= e; i++) {
//     result[i] = copiedArr[i - s];
//   }

//   return result.join("");
// }

// 우선 앞에서부터 더한 변수와 뒤에서부터 더한 변수 선언
// 배열의 길이-1 만큼 반복해야함. 안 그러면 초과됨
// tmp에는 다음 행과 곱할 행렬이 만들어져있음, [a,b]형태로 저장시킬거
// 바로 front 또는 back에다가 더해줘서 값을 추출해낼거임.
// 그리고 front와 back의 값을 비교한 후 더 작은 것을 리턴!~
// function solution(arr) {
//   let front = 0;
//   let back = 0;
//   let tmp = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (i === 0) {
//       front += arr[i][0] * arr[i][1] * arr[i + 1][1]; // 더할 값
//       tmp = [arr[i][0], arr[i + 1][1]];
//     } else {
//       front += tmp[0] * tmp[1] * arr[i + 1][1];
//       tmp = [tmp[0], arr[i + 1][1]];
//     }
//   }
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (i === arr.length - 1) {
//       back += arr[i][1] * arr[i][0] * arr[i - 1][0];
//       tmp = [arr[i][1], arr[i - 1][0]];
//     } else {
//       back += tmp[1] * tmp[0] * arr[i - 1][0];
//       tmp = [arr[i - 1][0], tmp[1]];
//     }
//   }
//   return front > back ? back : front;
// }
// function main() {
//   const readline = require("readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   let count = 0; // 입력 횟수를 세는 변수
//   let numArr = []; // 입력된 값을 저장할 배열
//   let result = 0;
//   rl.on("line", (line) => {
//     if (count === 0) {
//       // 첫 번째 입력: 행의 수
//       const rows = parseInt(line);
//       numArr = Array(rows)
//         .fill()
//         .map(() => []);
//       count++; // 입력 횟수 증가
//     } else {
//       // 두 번째 이후 입력: 각 행의 원소
//       const elements = line.split(" ").map(Number);
//       numArr[count - 1] = elements;
//       count++; // 입력 횟수 증가

//       // 모든 입력을 받은 경우, 입력 종료
//       if (count - 1 === numArr.length) {
//         result = solution(numArr);
//         console.log(result);
//         rl.close();
//       }
//     }
//   });
// }

// function solution(my_string, m, c) {
//   let arr = [...my_string];
//   let arrLen = arr.length;
//   let newArr = [];
//   for (let i = 0; i < arrLen / m; i++) {
//     newArr[i] = arr.splice(0, m);
//   }
//   return newArr.map((val) => val[c - 1]).join("");
// }

// function solution(q, r, code) {
//   return [...code].filter((_, idx) => idx % q === r).join("");
// }

// ascii 코드
// A~Z : 65~90
// a~z : 97~122
// function solution(my_string) {
//   const initArr = [];
//   for (let i = 65; i <= 90; i++) {
//     const char = String.fromCharCode(i);
//     let count = 0;
//     [...my_string].forEach((val) => (val === char ? count++ : null));
//     initArr.push(count);
//   }
//   for (let i = 97; i <= 122; i++) {
//     const char = String.fromCharCode(i);
//     let count = 0;
//     [...my_string].forEach((val) => (val === char ? count++ : null));
//     initArr.push(count);
//   }
//   return initArr;
// }

// 1이상 n이하의 정수들 중에서
// k의 배수인 것들만 오름차순으로 배열로 만들기.
// function solution(n, k) {
//   return [...Array(n)].map((_, i) => i + 1).filter((val) => val % k === 0);
// }

// function solution(my_string, indices) {
//   return [...my_string].filter((_, idx) => !indices.includes(idx)).join("");
// }

// function solution(start, end_num) {
//   let result = [];
//   for (let i = start; i >= end_num; i--) {
//     result.push(i);
//   }
//   return result;
// }

// function solution(arr, idx) {
//   let result = 0;
//   arr.forEach((val, index) => {
//     if (result === 0 && index >= idx && val === 1) {
//       result = index;
//     } else if (result === 0 && arr.length - 1 === index) {
//       result = -1;
//     }
//   });
//   return result;
// }

// n==1 > 0부터 b까지
// n==2 > a부터 마지막까지
// n==3 > a부터 b까지
// n==4 > a부터 b까지 c간격으로
// function solution(n, slicer, num_list) {
//   const [a, b, c] = slicer;
//   let count = 0;
//   switch (n) {
//     case 1:
//       return num_list.filter((_, index) => {
//         return index <= b;
//       });
//     case 2:
//       return num_list.filter((_, index) => {
//         return index >= a;
//       });
//     case 3:
//       return num_list.filter((_, index) => {
//         return index >= a && index <= b;
//       });
//     case 4:
//       return num_list.filter((_, index) => {
//         return index >= a && index <= b && count++ % c === 0;
//       });
//     default:
//       return null;
//   }
// }

// function solution(num_list) {
//   let result = -1;
//   num_list.forEach((val, idx) => {
//     if (result === -1 && val < 0) {
//       result = idx;
//     }
//   });
//   return result;
// }

// function solution(arr, intervals) {
//   let result = [];
//   intervals.forEach(([start, end]) => {
//     result.push(arr.slice(start, end + 1));
//   });
//   return result.flat();
// }

// function solution(arr) {
//   let result = [-1];
//   let startIdx = null;
//   let endIdx = null;
//   arr.forEach((val, idx) => {
//     if (startIdx === null && val === 2) {
//       startIdx = idx;
//     }
//   });
//   [...arr].reverse().forEach((val, idx) => {
//     if (endIdx === null && val === 2) {
//       endIdx = arr.length - idx - 1;
//     }
//   });
//   if (startIdx !== null && endIdx !== null) {
//     result = [...arr].slice(startIdx, endIdx + 1);
//   }
//   return result;
// }

function solution(arr, query) {
  let result = [...arr];
  query.forEach((val, idx) => {
    if (idx % 2 === 0) {
      result.splice(val + 1);
    } else {
      result.splice(0, val);
    }
  });
  return result;
}
